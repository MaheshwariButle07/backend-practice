import { Schema, model } from "mongoose";

const shoesSchema = new Schema({
    brand : String,
    price : Number,
    color :String,
    image : String,
    gender : String,
    description : String
})

const Shoes = model("Shoes", shoesSchema)

export default Shoes