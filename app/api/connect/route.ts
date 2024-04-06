import { connectDB } from "@/dbconfig/dbconfig";
import jwt from "jsonwebtoken";
import  User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    connectDB();

    try {
        const getToken = req.cookies.get("token")?.value;
        const verifyToken = jwt.verify(getToken!, process.env.TOKEN!);
        const user = await User.findById(verifyToken._id);
        console.log(user);
        return NextResponse.json(user);
    } catch (error:any) {
        console.log(error);
        return NextResponse.json({error: error.message}, {status: 404});
    }
}

// catch (error: any) {
//         console.log(error);
//         return NextResponse.json({ error: error.message }, { status: 404 });
//     }