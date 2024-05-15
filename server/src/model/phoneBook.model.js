import mongoose from "mongoose";
import { Schema } from "mongoose";

const phoneBookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    }

},{timestamps: true})

export const Phone = mongoose.model("phone" , phoneBookSchema)