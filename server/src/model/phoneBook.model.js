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

const phone = mongoose.model("phone" , phoneBookSchema)