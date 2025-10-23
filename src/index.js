import mongoose from "mongoose";
import { DB_NAME } from "./constatnts.js";

import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"  
});

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((error) => {
    console.error("Failed to start the server:", error);
});










/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`)
    console.log("Connected to MongoDB");

    app.on("error", (error) => {
      console.error("Error starting the server:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
    } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
    }
})();
*/