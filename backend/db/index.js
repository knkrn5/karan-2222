import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// console.log("MongoDB URL:", process.env.MONGO_URL);


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ Connected to MongoDB", connectionInstance.connection.host);
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
};

export default connectDB;