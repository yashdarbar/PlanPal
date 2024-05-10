"use client";

import React, { useEffect } from "react";
import { useContext, useState } from "react";
import UserContext from "@/context/userContext";
import axios from "axios";
import Tassk from "./Tassk";

const showTask = () => {
    const { user } = useContext(UserContext);
    const [tasks, setTasks] = useState([]);

    const getTask = async (userId) => {
        //console.log(userId);
        try {
            const response = await axios.get(`/api/users/${userId}/task`);
            console.log("eorroro", response);
            setTasks([...response.data].reverse());

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (user) {
            getTask(user);
            //console.log(user);
        }
    }, [user]);

    return (
        <div className="mt-10">
            <h1 className="text-center text-3xl font-semibold">Tasks</h1>
            <div className="flex flex-col mx-auto text-center w-fit  bg-black text-black mt-8">
                {tasks.map((task) => (
                    <Tassk task={task} key={task.id}></Tassk>
                ))}
            </div>
        </div>
        // <div className="flex flex-col w-full">
        //     <h1 className="justify-center flex">tasks</h1>
        //     <div className="">
        //         {tasks.map((task) => (
        //             <Tassk task={task} key={task._id}></Tassk>
        //         ))}
        //         <Tassk></Tassk>
        //     </div>
        // </div>
    );
};

export default showTask;

// const showTask = () => {

//     const { user } = useContext(UserContext);
//     const [tasks, setTasks] = useState();

//     const getTask = async (userId) => {
//         try {
//             const response = await axios.get(`api/users/${userId}/tasks`);
//             setTasks([...response]).reverse();
//         } catch (error) {
//             console.error(error);
//         }

//         console.log(
//             "data",
//             user
//         )
//     }

//     if (user) {
//         getTask(user);
//     }

//     return <div>
//             <h1> tasks</h1>
//             <div>
//                 {tasks.map(task => (<Tassk task={task} key={task.id}></Tassk>))}
//             </div>
//     </div>;
// };
