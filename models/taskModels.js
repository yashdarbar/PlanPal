import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.ObjectId,
        require: true,
    }
});

export const Task = mongoose.models.task || mongoose.model("task", TaskSchema);
