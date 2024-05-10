import { connectDB } from "@/dbconfig/dbconfig";
import User from "@/models/userModels";
import { NextResponse } from "next/server";

connectDB();

export const dynamic = "force-dynamic";

export const GET = async (
    request: Request,
    { params }: { params: { userId: string } }
) => {
    const { userId } = params;
    console.log("lllljfl", userId);
    try {
        const user = await User.findById({ _id: userId });
        return NextResponse.json(user);
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error fetching user:", error);

        // Create a more descriptive error object
        const errorResponse = {
            message: "Failed to fetch user",
            details: error instanceof Error ? error.message : "Unknown error",
        };

        return NextResponse.json(errorResponse, { status: 500 });
    }
};



// export const DELETE = async () => {
//     try {
//         const deleteTask = await Task.findById
//     } catch (error) {
//         console.error(error, "Error deleting");
//     }
// }
export const config = {
    runtime: "edge",
};

// export const GET = async (
//     request: Request,
//     { params }: { params: { userId: string } }
// ) => {
//     const { userId } = params;
//     console.log(userId);

//     try {
//         console.log("userIddd", userId);
//         const user = await User.findById({ _id: userId });
//         console.log("user", user);
//         return NextResponse.json(user);
//     } catch (error: any) {
//         return NextResponse.json({
//             error: error.message,
//             status: error.status,
//         });
//     }
// };

// export const config = {
//     runtime: "edge",
// };

// export default async function GET(
//     request: Request,
//     { params }: { params: { userId: string } }
// ) {
//     const { userId } = params;
//     console.log(userId);

//     try {
//         console.log("userIddd", userId);
//         const user = await User.findById({ _id: userId });
//         console.log("user", user);
//         return NextResponse.json(user);
//     } catch (error: any) {
//         return NextResponse.json({
//             error: error.message,
//             status: error.status,
//         });
//     }
// }
