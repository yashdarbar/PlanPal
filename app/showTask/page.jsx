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
        <div>
            <h1>tasks</h1>
            <div>
                {tasks.map((task) => (
                    <Tassk task={task} key={task.id}></Tassk>
                ))}
            </div>
        </div>
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
