import mongoose from 'mongoose'
import DB_NAME from './constants.js'
import app from './app.js'

//connecting mongodb
const connectDB = async () => {
   try {
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     console.log(`\n MONGODB CONNECTED !! DB HOST: ${connectionInstance.connection.host}`)

   } catch (error) {
     console.log("MONGODB CONNETCION ERROR : ", error)
     process.exit(1)
   }
}

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`server is running on PORT :: ${process.env.PORT}`)
    })
})
.catch(() => {
    console.log("MONGODB CONNECTION FAILED !!! ", error)
})
