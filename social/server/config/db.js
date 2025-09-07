import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.dbUrl);
        console.log("MONGODB CONNECT SUCCESSFULLY");
    } catch (error) {
        console.error("MONGODB CONNECTION ERROR:",error);
        process.exit(1);
    }
}
