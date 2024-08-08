"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export const AddTask = () => {
    const [task, setTask] = useState({ title: "", body: "" });
    const [disable, setDisabled] = useState(false);

    useEffect(() => {
        if (task.title.length > 0 && task.body.length > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [task]);

    const onAddTask = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/users/addTask", task);
            console.log("successful", response.data);
        } catch (error) {
            console.log({ message: " failed", error: error });
        }
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center min-h-screen text-lg ">
                <h1 className="font-semibold">Task!</h1>
                <hr />
                <div className="flex flex-col w-2/3 sm:w-3/5 md:w-2/6">
                    <label htmlFor="title" className="pl-2 mt-2">
                        title
                    </label>
                    <input
                        className="rounded-lg p-1 pl-2 m-1"
                        type="title"
                        name="title"
                        placeholder="title"
                        value={task.title}
                        onChange={(e) => {
                            setTask({ ...task, title: e.target.value });
                        }}
                    />
                    <label htmlFor="body" className="pl-2 mt-2">
                        body
                    </label>
                    <textarea
                        rows={4}
                        className="rounded-lg p-1 pl-2 m-1"
                        name="body"
                        placeholder="body"
                        value={task.body}
                        onChange={(e) => {
                            setTask({ ...task, body: e.target.value });
                        }}
                    />
                </div>
                <button
                    type="submit"
                    onClick={onAddTask}
                    disabled={disable}
                    className="mt-2 px-3 py-1 bg-white text-base sm:text-lg rounded-lg text-black font-semibold"
                >
                    {disable ? "No AddTask" : "AddTask"}
                </button>
            </div>
        </div>
    );
};

