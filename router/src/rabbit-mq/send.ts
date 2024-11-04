
import { CreateRabbitMQString } from "../helpers/create-connections";

var amqp = require("amqplib/callback_api");
var uuid = require("uuid");

function sendMessage(ID: any, Amount: any): Promise<void> {
  return new Promise((resolve, reject) => {
    const rabbitMQUrl = CreateRabbitMQString();
    console.log(`Connecting to RabbitMQ at ${rabbitMQUrl}`);
    amqp.connect(rabbitMQUrl, function (error0: any, connection: any) {
      if (error0) {
        console.error("Failed to connect to RabbitMQ:", error0);
        return reject(error0);
      }
      connection.createChannel(function (error1: any, channel: any) {
        if (error1) {
          console.error("Failed to create channel:", error1);
          connection.close();
          return reject(error1);
        }

        var queue = "todoRabbitMQ";
        var callbackQueue = "callbackQueue";
        var correlationId = uuid.v4();

        channel.assertQueue(queue, {
          durable: false,
        });
        channel.assertQueue(callbackQueue, {
          durable: false,
          exclusive: true,
        });

        const messages = "#ID #Amount";
        const msg = messages
          .replace("#ID", ID.toString())
          .replace("#Amount", Amount.toString());

        channel.consume(
          callbackQueue,
          function (msg: any) {
            if (msg.properties.correlationId === correlationId) {
              const msgContent = msg.content.toString().split(" ");
              const id = msgContent[0];
              const error = msgContent[1];
              console.log("ID: %s - callback", id);
              switch (error) {
                case "InsufficientFunds":
                  reject("Insufficient funds Error");
                  break;
                case "Success":
                  resolve();
                  break;
                default:
                  resolve();
                  break;
              }
              setTimeout(function () {
                connection.close();
              }, 500);
            }
          },
          {
            noAck: true, // Set noAck to false to enable message acknowledgment
          }
        );

        channel.sendToQueue(queue, Buffer.from(msg), {
          correlationId: correlationId,
          replyTo: callbackQueue,
        });
        console.log(" [x] Sent %s", msg);
      });
    });
  });
}

export default sendMessage;
