"use client";

import React, { useEffect } from "react";
import { useContext, useState } from "react";
import UserContext from "@/context/userContext";
import axios from "axios";
import Task from "./Task";

const ShowTask = () => {
    const { user } = useContext(UserContext);
    const [tasks, setTasks] = useState([]);

    const getTask = async (userId) => {
        try {
            const response = await axios.get(`/api/users/${userId}/task`);
            console.log("resssppnn", response.data);
            setTasks([...response.data].reverse());

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (user) {
            getTask(user);
            //console.log("user", user);
        }
    }, [user]);

    return (
        <div className="mt-10">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold">Tasks</h1>
            <div className="flex flex-col mx-auto text-center w-fit  bg-black text-black mt-8">
                {tasks.length > 0 ? (tasks.map((task) => (
                    <Task task={task} key={task.id}></Task>
                ))) : (<p className="text-white font-semibold ">No tasks found.</p>)}
            </div>
        </div>

    );
};

export default ShowTask;

