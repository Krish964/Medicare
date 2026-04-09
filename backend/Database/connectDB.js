import dns from "node:dns";
import mongoose from "mongoose"
import { DbName } from "./constant.js"


dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DbName}`)
        console.log(`Database Connected : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("Database connection error", error)
        process.exit(1)
    }
}

export default connectDB;