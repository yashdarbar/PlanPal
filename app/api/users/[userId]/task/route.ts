import { connectDB } from "@/dbconfig/dbconfig";
import Task from "@/models/taskModels";
import { NextResponse } from "next/server";

connectDB();

export const dynamic = "auto";

export const GET = async (
    request: Request,
    { params }: { params: { userId: string } }
) => {
    const { userId } = params;
    //console.log("iii", userId);
    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
    try {
        const tasks = await Task.find({ userId });
        return NextResponse.json(tasks);
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error fetching tasks:", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
};

