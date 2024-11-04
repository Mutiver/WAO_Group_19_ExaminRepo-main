import mongoose from "mongoose";
import { CreateMongoString } from "../helpers/create-connections";

//const connectionString = "mongodb://root:example@localhost:27017/";
//const connectionString = "mongodb://root:example@mongo:27017/";

export const dbInit = async () => {
  const connectionString = CreateMongoString();

  try {
    await mongoose.connect(connectionString);

    if (mongoose.ConnectionStates.connected) {
    }

    console.log("db connected");
  } catch {
    console.log("db connection error");
  }
};
