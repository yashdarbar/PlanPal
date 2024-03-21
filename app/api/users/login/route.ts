import { NextRequest, NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import bcryptjs from "bcryptjs";
import User from "@/models/userModels";
import { connectDB } from "@/dbconfig/dbconfig";

connectDB();

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const reqbody = await req.json();
        const { email, password } = reqbody;
        console.log(reqbody);

        const user = await User.findOne({ email });
        if (!user) {
            return console.log("User not found");
        }

        console.log("user exists", user);
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            console.log("Invalid password");
        }
    } catch (error: any) {
        console.log(error);
    }
}
