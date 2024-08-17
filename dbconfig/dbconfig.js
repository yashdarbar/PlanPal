//"use server"

import * as mongoose from "mongoose"; //mongoose from "mongoose";

export async function connectDB() {
    try {
        if (!process.env.MONGODB_URI) {
            console.log("something wrong with the mongodb URI");
            return;
        }
        await mongoose.connect(process.env.MONGODB_URI);
        mongoose.connection.on("connected", () => {
            console.log("connection is connected");
        });
        mongoose.connection.on("error", (err) => {
            console.log("connection is not established", err);
        });
    } catch (error) {
        console.error(error);
    }
}

//export const runtime = "edge";
// export async function connectDB() {
//     try {
//         if (!process.env.MONGODB_URI) {
//             console.log("Something is wrong with the MongoDB URI");
//             return;
//         }

//         // await mongoose.connect(process.env.MONGODB_URI, {
//         //     useNewUrlParser: true,
//         //     useUnifiedTopology: true,
//         // });

//         mongoose.connection.on("connected", () => {
//             console.log("Connected to MongoDB");
//         });

//         mongoose.connection.on("error", (err) => {
//             console.error("Connection error", err);
//         });
//     } catch (error) {
//         console.error("Connection error", error);
//     }
// }
