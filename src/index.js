// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from './app.js'

// Load environment variables from the env file
dotenv.config();

// Connect to the MongoDB database
connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`⚙️ Server is running at ${process.env.PORT}`);
    
  });
})
.catch((error) => console.error("Error connecting to MongoDB:", error.message));






/*
First Approch : Neglected beacuse it is polluting our index.js and bringing everything at one place which is making it cluttered

import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;
    });

    app.listen(process.env.MONGODB_PORT, () => {
      console.log(`App listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
    process.exit(1);
  }
})();
*/
