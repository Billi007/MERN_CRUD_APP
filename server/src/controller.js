import mongoose from "mongoose";
import {Phone} from './model/phoneBook.model.js'
import asyncHandler from './utils/asyncHandler.js'
import APIError from './utils/APIError.js'
import asyncResponse from './utils/asyncResponse.js'

const addPhoneNumber = asyncHandler( async (req,res) => {
 const phoneNumber = new Phone({
   name: req.body.name,
   number: req.body.name
 })
 if(!phoneNumber){
    throw new APIError("all fields are required.")
 }
 await phoneNumber.save()

 return res
 .status(200)
 .json(
    new asyncResponse(200, {phoneNumber}, 'phone number added successfully.')
 )
})

export {addPhoneNumber}