import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    email: string;
    password: string;
    username: string;
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true},
});

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;

// import mongoose from "mongoose";
// import { Interface } from "readline";

// Interface

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: [true, "Please enter your username!"],
//         unqiue: true
//     },
//     email: {
//         type: String,
//         required: [true, "Please enter your email!"],
//         unqiue: true
//     },
//     password: {
//         type: String,
//         required: [true, "Please enter your password!"]
//     }
// });

// const User = mongoose.models.users || mongoose.model("users", userSchema);

// export default User;
