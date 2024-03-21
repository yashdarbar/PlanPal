import mongoose from "mongoose";

export async function connectDB() {
    try {
        if (!process.env.MONGODB_URI) {
            console.log("something wrong with the mongodb URI");
        }
        await mongoose.connect(process.env.MONGODB_URI);
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("connection is connected");
        });
        connection.on("error", (err) => {
            console.log("connection is not established", err);
        });
    } catch (error) {
        console.error(error);
    }
}
