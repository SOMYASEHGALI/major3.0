

const mongoose = require("mongoose");
const listings = require("./data.js");
const initData=require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl="mongodb+srv://somyasehgal91:iTSksetXCIZbkDdF@cluster0.bufs8ve.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// console.log(listings);
main()
  .then(() => {
    console.log("connected to DB");
    return initDB();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
    //console.log("data was initialized");
    await Listing.deleteMany({});
   initData.data=initData.data.map((obj)=>({...obj,owner:'66740515bacefabafeaaad67'})) 
   await Listing.insertMany(initData.data);
   console.log("data was initialized");
 };
 
 


