#!/usr/bin/env node

import mongoose from "mongoose";
import connectDB from "./db";
import { checkUserAmount, changeAmount } from "./services/user-services";
import { CreateRabbitMQString } from "./helpers/create-connections";
var amqp = require('amqplib/callback_api');

const startRabbitMQ = () => {
    const rabbitMQUrl = CreateRabbitMQString() || 'amqp://localhost';
    console.log(`Connecting to ${rabbitMQUrl}`);
    amqp.connect(rabbitMQUrl, function(error0:any, connection:any) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1:any, channel:any) {
            if (error1) {
                throw error1;
            }

            var queue = 'todoRabbitMQ';

            channel.assertQueue(queue, {
                durable: false
            });

            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
            channel.prefetch(1); // Set the number of messages each receiver can handle at a time

            channel.consume(queue, function(msg:any) {
                console.log(" [x] Received %s", msg.content.toString());
                setTimeout(async function() {
                    const numbers = msg.content.toString().split(' ');
                    const id = numbers[0];
                    const amount = parseInt(numbers[1]);
                    console.log("Accessing ID Account:", id);
                    console.log("Transfering:", amount);
                    // Add a call to the Bank API to transfer the amount from the ID account

                    const userAmount = await checkUserAmount(id);
                    console.log("User Amount:", userAmount);

                    const changeCallback = await changeAmount(id, amount);
                    const callbackMsg = id + " " + changeCallback;
                    switch (changeCallback) {
                        case 'InsufficientFunds':
                            console.log('Insufficient funds Error');
                            channel.sendToQueue(msg.properties.replyTo, Buffer.from(callbackMsg), {
                                correlationId: msg.properties.correlationId
                            });
                            break;
                        case 'Success':
                            console.log("Success");
                            channel.sendToQueue(msg.properties.replyTo, Buffer.from(callbackMsg), {
                                correlationId: msg.properties.correlationId
                            });
                            break;
                        default:
                            console.log("Amount changed from User ID:", amount);
                            break;
                    }

                    

                
                    channel.ack(msg); // Acknowledge that the message has been processed
                }, 1000);
            }, {
                noAck: false // Set noAck to false to enable message acknowledgment
            });
        });
    });
};

const main = async () => {
    await connectDB();
    startRabbitMQ();
};

main();