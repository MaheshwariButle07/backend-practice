import { Schema, model } from "mongoose";

const shoesSchema = new Schema({
    brand : String,
    price : String,
    color :String,
    image : String,
    gender : String,
    review : String,
    description : String
})

const Shoes = model("Shoes", shoesSchema)

export default Shoes