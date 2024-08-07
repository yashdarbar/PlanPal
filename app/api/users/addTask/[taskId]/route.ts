import { NextResponse } from "next/server";
import { connectDB } from "@/dbconfig/dbconfig";
import { Task } from "@/models/taskModels";

connectDB();

export const DELETE = async (req: Request, {params} : {params: {taskId: string}}) => {
    const {taskId} = params;
    //console.log(taskId);
    try {
        await Task.deleteOne({_id: taskId});
        return NextResponse.json({
            message: "Task deleted successfully",
            status: 200
        });
    } catch (error:any) {
        return  NextResponse.json({error: error.message, status: error.status});
    }
};

export const runtime = "nodejs";