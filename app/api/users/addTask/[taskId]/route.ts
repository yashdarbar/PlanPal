import { NextResponse } from "next/server";
import { connectDB } from "@/dbconfig/dbconfig";
import Task from "@/models/taskModels";

connectDB();

export const DELETE = async (
    req: Request,
    { params }: { params: { taskId: string } }
) => {
    const { taskId } = params;
    //console.log("tassk id", taskId);
    if (!taskId) {
        return new NextResponse("Task id not found", { status: 404 });
    }
    //console.log("taskId", taskId);
    try {
        const deleted = await Task.deleteOne({ _id: taskId });
        // return NextResponse.json({
        //     message: "Task deleted successfully",
        //     status: 200,
        // });
        return NextResponse.json(deleted, { status: 200});

    } catch (error: any) {
        return new NextResponse("Internal Error", { status: 500 });
    }
};

//export const runtime = "edge";
