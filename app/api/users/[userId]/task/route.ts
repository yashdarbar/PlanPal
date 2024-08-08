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

    try {
        const tasks = await Task.find({ _id:userId });
        return NextResponse.json(tasks);
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error fetching tasks:", error);

        // Create a more descriptive error object
        const errorResponse = {
            message: "Failed to fetch tasks",
            details: error instanceof Error ? error.message : "Unknown error",
        };

        return NextResponse.json(errorResponse, { status: 500 });
    }
};

export const runtime = "edge";

// connectDB();

// export const dynamic = "force-dynamic";

// export default async function GET(
//     request: Request,
//     { params }: { params: { userId: string } }
// ) {
//     const { userId } = params;
//     let tasks = [];
//     try {
//         tasks = await Task.find({ userId: userId });
//         return NextResponse.json(tasks);
//     } catch (error: any) {
//         return NextResponse.json({
//             error: error.message,
//             status: error.status,
//         });
//     }
// }