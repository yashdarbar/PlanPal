import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/models/userModels";
import { connectDB } from "@/dbconfig/dbconfig";
import jwt from "jsonwebtoken";

connectDB();


export async function POST(req: NextRequest, _id: string) {
    try {

        const reqbody = await req.json();
        const { email, password } = reqbody;
        //console.log(reqbody);

        const user = await User.findOne({ email });
        if (!user) {
            return new NextResponse("User not found", { status: 404});
        }
        //console.log("user exists", user);

        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return new NextResponse("Password is incorrect", { status: 401});
        }

        const tokenData = {
            _id: user._id,
            username: user.username,
            email: user.email,
        };

        //create token
        const token = jwt.sign(tokenData, process.env.TOKEN!, {
            expiresIn: "1d",
        });
        //console.log("token created", token);

        const response = NextResponse.json({
            message: "Login is successful",
            success: true,
            user: user,
        });
        response.cookies.set("token", token, { httpOnly: true });
        console.log("token updated", response);
        return response;

    } catch (error: any) {
        console.log(error);
        return new NextResponse("[LOGIN_ERROR]", { status: 404 });
    }
}
