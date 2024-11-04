export const CreateMongoString = () => {
    return `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVICE}:27017/TODO-Bank`
} 

export const CreateRabbitMQString = () => {
    return `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_SERVICE}:5672/`
}