import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB from './config/connectdb.js'




const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

//cors policy
app.use(cors())

//databasse connection
connectDB(DATABASE_URL)

//JSON
app.use(express.json())


app.listen(port, () => {
    console.log(`Server listening at http://127.0.0.1:${port}`)
})