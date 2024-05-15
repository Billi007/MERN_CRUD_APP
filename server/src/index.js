import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
const app = express()

dotenv.config({
    path: './.env'
})

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

const connectDB = async () => {
   try {
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
     console.log(`\n MONGODB CONNECTED !! DB HOST: ${connectionInstance.connection.host}`)

   } catch (error) {
     console.log("MONGODB CONNETCION ERROR : ", error)
     process.exit(1)
   }
}

connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server is running on PORT :: ${process.env.PORT}`)
    })
})
.catch(() => {
    console.log("MONGODB CONNECTION FAILED !!! ", error)
})
