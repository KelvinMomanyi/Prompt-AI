import mongoose from "mongoose";


let isConnected = false; //track connection status to the database

export const connectToDB= async()=>{
  mongoose.set("strictQuery", true)

  if(isConnected){
    console.log('mongo connected')
    return;
  }

  try{
    await mongoose.connect(process.env.MONGODB_URI,{
        dbName : "share_prompt",
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    isConnected = true;

    console.log('MongoDB connected')

  }catch(error){
    console.log(error)
  }
}