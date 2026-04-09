import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectDB from "./Database/connectDB.js"
import cors from "cors";

const app =  express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors());

import authRoutes from "./Routes/authRoutes.js"

// Routes Declaration
app.use("/api/auth" , authRoutes)

app.listen(PORT , () => {
    console.log(`server is running at ${PORT}`)
    connectDB()
})
