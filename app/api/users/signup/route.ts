import { connectDB } from "@/dbconfig/dbconfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectDB();

export async function POST(req: NextRequest) {

    try {
        const reqBody = await req.json();
        const {username, email, password} = reqBody;
        //console.log(reqBody);
        const user = await User.findOne({email});
        if (user) {
            //console.log("User already exists");
        }
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);
        const newUser = new User({username, password:hashPassword, email});
        const saveUser = newUser.save();
        return NextResponse.json({
            message: "user is successfully created!",
            success: true,
            saveUser,
        });
    } catch (error:any) {
        return NextResponse.json({error: error.message});
    }
}
