import { Schema, model } from "mongoose";

const shoesSchema = new Schema({
    brand : String,
    price : String,
    color :String,
    image : String,
    gender : String,
    review : String,
    description : String
},
{
    timestamps:true
})

const Shoes = model("Shoes", shoesSchema)

export default Shoes