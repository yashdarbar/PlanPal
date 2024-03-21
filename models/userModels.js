import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter your username!"],
        unqiue: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        unqiue: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    }
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;