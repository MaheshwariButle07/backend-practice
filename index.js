import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { getHealth } from "./controller/getHealth.js";
import { postShoes, getShoes, getShoesId, putShoesId, deleteShoesId } from "./controller/shoes.js";
import { error } from "./controller/error.js";
import mongoose from "mongoose";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json());

const connection = async ()=>{
  const connect = await mongoose.connect(process.env.MONGODB_URL)

  if(connect){
    console.log("MongoBd connected succesfully ")
  }

  else{
    console.log("MongoBd connected unsuccessfull ")
  }
}
connection()

app.get("/health", getHealth)

app.post("/shoes", postShoes);

app.get("/shoes", getShoes);

app.get("/shoes/:id", getShoesId);

app.put("/shoes/:id", putShoesId);

app.delete("/shoes/:id", deleteShoesId);

app.use("*", error)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running at Port : ${PORT}`);
});
