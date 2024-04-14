"use client";

import UserContext from "@/context/userContext";
import Link from "next/link";
import { useContext } from "react";

const Home = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div>
                <h2 className="text-xl font-semibold">
                    MAKE DAY PRODUCTIVE BY TAKING TRACK OF YOUR TODO's
                </h2>
                {user && (
                    <h1 className="mt-2 px-3 py-1 bg-white rounded-lg text-black font-semibold">
                        <Link href={"/addTask"}>Add Task</Link>
                    </h1>
                )}
            </div>
        </div>
    );
};

export default Home;
