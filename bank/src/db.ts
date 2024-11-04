import { CreateMongoString } from "./helpers/create-connections";

const mongoose = require('mongoose');

const connectDB = async (retries = 2, wait = 5000) => {
    const mongoUrl = CreateMongoString()
    console.log(`Connecting to MongoDB at ${mongoUrl}`);
    while (retries) {
        try {
            await mongoose.connect(mongoUrl, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                authSource: "admin"
            });
            console.log('MongoDB Connected');
            retries = 0;
        } catch (err:any) {
            console.error(err.message);
            retries -= 1;
            console.log('retries left:', retries);
            if (retries === 0) process.exit(1);
            await new Promise(res => setTimeout(res, wait));
        }
    }
    
}

export default connectDB;