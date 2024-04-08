import { connectDB } from "@/dbconfig/dbconfig";
import jwt from "jsonwebtoken";
import  User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    connectDB();

    try {
        const getToken = req.cookies.get("token")?.value;
        console.log(getToken);
        const verifyToken = jwt.verify(getToken!, process.env.TOKEN!);
        console.log(verifyToken);
        // const user = await User.findById(verifyToken._id);
        // console.log("lflsf",user);
        return NextResponse.json(verifyToken);
    } catch (error:any) {
        console.log(error);
        return NextResponse.json({error: error.message}, {status: 404});
    }
}

// export async function GET(req: NextRequest) {
//     connectDB();

//     try {
//         const getToken = req.cookies.get("token")?.value;
//         console.log("getToken:", getToken); // Log the token value to ensure it's being retrieved correctly

//         if (!getToken) {
//             throw new Error("Token not found in cookies.");
//         }

//         const verifyToken = jwt.verify(getToken, process.env.TOKEN!);
//         console.log("verifyToken:", verifyToken); // Log the decoded token to see its structure and contents

//         if (!verifyToken || !verifyToken._id) {
//             throw new Error("Invalid token or _id not found in token payload.");
//         }

//         const user = await User.findById(verifyToken._id);
//         console.log("User:", user); // Log the retrieved user object

//         return NextResponse.json(user);
//     } catch (error: any) {
//         console.error("Error:", error); // Log any errors that occur
//         return NextResponse.json({ error: error.message }, { status: 404 });
//     }
// }

