import { NextResponse } from "next/server";
import { connectDB } from "@/dbconfig/dbconfig"; // Adjust the path as needed
import User from "@/models/userModels"; // Adjust the path as needed

export async function GET(
    request: Request,
    { params }: { params: { userId: string } }
) {

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

// 