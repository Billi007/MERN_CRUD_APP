import mongoose from "mongoose";
import {Phone} from './model/phoneBook.model.js'
import asyncHandler from './utils/asyncHandler.js'
import APIError from './utils/APIError.js'
import asyncResponse from './utils/asyncResponse.js'

const addPhoneNumber = asyncHandler( async (req,res) => {
 const phone = new Phone(req.body)
 if(!phone){
    throw new APIError("phone number is required.")
 }
 await phone.save()

 return res
 .status(200)
 .json(
    new asyncResponse(200, {phone}, 'phone number added successfully.')
 )
})

export {addPhoneNumber}