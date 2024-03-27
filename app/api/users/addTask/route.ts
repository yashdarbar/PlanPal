import { connectDB } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import { Task } from "@/models/taskModels";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(req: NextRequest) {

    const value = req.cookies.get("token")?.value;
    const data = jwt.verify(value, process.env.TOKEN);

    try {
        const reqBody = await req.json();
        const { title, body } = reqBody;
        console.log(reqBody);
        const task = new Task({
            title,
            body,
            userId: data._id
        });
        await task.save();
        console.log(task);

        return NextResponse.json({
            message: "user is successfully!",
            success: true,
            task,
        });
    } catch (error: any) {
        return NextResponse.json(error);
    }
}
