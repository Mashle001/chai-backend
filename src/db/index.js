import mongoose from "mongoose";
import { DB_NAME } from "../constatnts.js";

const connectDB = async () => {
  try {
    const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`Connected to MongoDB DB HOST: ${connectioninstance.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1)
  }
};

export default connectDB;