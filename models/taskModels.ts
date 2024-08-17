import mongoose, { Document, Schema } from "mongoose";

interface ITask extends Document {
    title: string;
    body: string;
}

const TaskSchema: Schema = new Schema({
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

const Task = mongoose.models.Task || mongoose.model<ITask>("Task", TaskSchema);

export default Task;

// Define an interface for the Task document
// interface ITask extends Document {
//     title: string;
//     body: string;
//     userId: mongoose.Types.ObjectId;
//     createdAt?: Date;
// }

// Define the schema

// import mongoose from "mongoose";

// const TaskSchema = new mongoose.Schema({
//     // title: {
//     //     type: String,
//     //     required: true,
//     // },
//     // body: {
//     //     type: String,
//     //     required: true,
//     // },
//     // userId: {
//     //     type: mongoose.Schema.Types.ObjectId,
//     //     require: true,
//     //     ref: "User"
//     // }
//     title: {
//         type: String,
//         required: true,
//     },
//     body: {
//         type: String,
//         required: true,
//     },
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

// const Task =  mongoose.model("task", TaskSchema);

// export default Task;
