export const CreateMongoString = () => {
    return `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVICE}:27017/`
}