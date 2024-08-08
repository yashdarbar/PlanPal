import { connectDB } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import  Task  from "@/models/taskModels";
import jwt, { type JwtPayload, type Secret } from "jsonwebtoken";

connectDB();

export async function POST(req: NextRequest) {

    interface CustomJwtPayload extends JwtPayload {
        _id: string;
    }

    const value = req.cookies.get("token")?.value!;
    const data = jwt.verify(value, process.env.TOKEN! as Secret) as CustomJwtPayload;

    try {
        const reqBody = await req.json();
        const { title, body } = reqBody;
        //console.log(reqBody);
        const task = new Task({
            title,
            body,
            userId: data._id,
        });
        await task.save();
        //console.log(task);
        //console.log("Token value:", value);
        return NextResponse.json({
            message: "user is successfully!",
            success: true,
            task,
            value
        });
    } catch (error: any) {
        return NextResponse.json(error);
    }
}
