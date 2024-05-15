import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
import { Phone } from "./model/phoneBook.model.js";
import express from 'express'
const app = express()

//configuring our enviroment variables by 'DOTENV'
dotenv.config({
    path: './.env'
})

//using express
app.use(cors({
    origin: process.env.ORS_ORIGIN,
    credentials: true
}))

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use(express.json({
    limit: "16kb"
}))

//adding phone number
app.post('/add-phone', async (req, res) => {
 const {name, number} = req.body
 const Number = new Phone({name, number})
 try {
    await Number.save()
    res
    .status(201)
    .json({
        status: "success",
        data: {
            Number
        }
    })

 } catch (error) {
    res
    .status(500)
    .json({
        status: "Failed",
        message : error
    })
 }
})

//reading phone number
app.get('/get-phone', async(req,res)=>{
    const Number = await Phone.find({})
    try {
     res
     .status(200)
     .json({
        status: "success",
        data: {
            Number
        }
     })
    } catch (error) {
        res
        .status(501)
        .json({
        status: "Failed",
        message : error
        })
    }
})

//updating phone number
app.patch('/update-phone/:id', async(req, res) => {
const updatedNumber = await Phone.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
})

try {
    res
    .status(200)
    .json({
       status: "success",
       data: {updatedNumber}
    })
   } catch (error) {
       res
       .status(501)
       .json({
       status: "Failed",
       message : error
       })
   }
    
})

//deleting phone number
app.delete('/delete-phone/:id', async(req, res) => {
 await Phone.findByIdAndDelete(req.params.id)

    try {
    res
    .status(200)
    .json({
       status: "success",
       data: {}
    })
    } catch (error) {
        res
        .status(501)
        .json({
        status: "Failed",
        message : error
        })
    }
})
export default app