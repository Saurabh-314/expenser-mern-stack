import express from 'express';
import mongoose from "mongoose"; //npm run dev 
import cors from "cors";

mongoose.set('strictQuery', true);

const PORT = 4000;
const MONGO_URL = 'mongodb+srv://saurabh-314:saurabh123@cluster0.jfrinjg.mongodb.net/newMongo?retryWrites=true&w=majority';

const app = express();
app.use(cors);


await mongoose.connect(MONGO_URL)
console.log("db connection successfully");


app.get("/", (req, res) => {
  res.send("hello world");
})

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
})