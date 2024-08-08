import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    // title: {
    //     type: String,
    //     required: true,
    // },
    // body: {
    //     type: String,
    //     required: true,
    // },
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     require: true,
    //     ref: "User"
    // }
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Task =  mongoose.model("task", TaskSchema);

export default Task;