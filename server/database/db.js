// import mongoose from "mongoose";

// const Connection = async(username,password)=> {
//     const URL ='mongodb://nikesh:nikesh@ac-7plqj47-shard-00-00.nvslkz0.mongodb.net:27017,ac-7plqj47-shard-00-01.nvslkz0.mongodb.net:27017,ac-7plqj47-shard-00-02.nvslkz0.mongodb.net:27017/?ssl=true&replicaSet=atlas-sc2cce-shard-0&authSource=admin&retryWrites=true&w=majority'
//     try {
//      await mongoose.connect(URL,{useUnifiedTopology:true});
//      console.log('database connect')
//     }catch(error){
//       console.log("error while connecting db ",error.message);
//     }
// }

// export default Connection;

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async (username, password) => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-7plqj47-shard-00-00.nvslkz0.mongodb.net:27017,ac-7plqj47-shard-00-01.nvslkz0.mongodb.net:27017,ac-7plqj47-shard-00-02.nvslkz0.mongodb.net:27017/?ssl=true&replicaSet=atlas-sc2cce-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true
         });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;