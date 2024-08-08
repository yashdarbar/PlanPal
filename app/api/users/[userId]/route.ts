import { NextResponse } from "next/server";
import { connectDB } from "@/dbconfig/dbconfig"; // Adjust the path as needed
import User from "@/models/userModels"; // Adjust the path as needed

export async function GET(
    request: Request,
    { params }: { params: { userId: string } }
) {
    //await connectDB();

    try {
        await connectDB();
        const { userId } = params;
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
        }
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}

// import { connectDB } from "@/dbconfig/dbconfig";
// import User from "@/models/userModels";
// import { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse } from "next/server";

// connectDB();

// export const dynamic = "auto";

// export const GET = async (
//     request: Request,
//     { params }: { params: { userId: string } }
// ) => {
//     const { userId } = params;
//     console.log("lllljfl", userId);
//     try {
//         const user = await User.findById({ _id: userId });
//         return NextResponse.json(user);
//     } catch (error) {
//         // Log the error for debugging purposes
//         console.error("Error fetching user:", error);

//         // Create a more descriptive error object
//         const errorResponse = {
//             message: "Failed to fetch user",
//             details: error instanceof Error ? error.message : "Unknown error",
//         };

//         return NextResponse.json(errorResponse, { status: 500 });
//     }
// };

// export const runtime = "edge";
