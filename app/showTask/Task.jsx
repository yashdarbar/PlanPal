"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const Task = ({ task, key }) => {
    const router = useRouter();

    const onDeleteTask = async (taskId) => {
        try {
            await axios.delete(`/api/users/addTask/${taskId}`);
            router.refresh();
            toast.success("Task deleted successfully");
        } catch (error) {
            toast.error("Something went wrong");
            console.log("Failed to delete task", error);
        }
    };

    return (
        <div>
            <div
                key={key}
                className=" bg-white flex flex-col mb-2 border-4 border-gray rounded-xl py-3 px-2 w-80 sm:w-96"
            >
                <h1 className="font-bold text-xl">{task.title}</h1>
                <p className="text-lg ">{task.body}</p>
                <button
                    type="submit"
                    className="bg-black w-fit text-white px-2 py-1 rounded-lg mt-2 m-auto"
                    onClick={() => {
                        onDeleteTask(task._id);
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Task;
