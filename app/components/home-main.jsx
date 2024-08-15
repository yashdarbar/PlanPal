"use client";

import UserContext from "@/context/userContext";
import Link from "next/link";
import { useContext } from "react";

export const HomeMain = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="flex items-center w-full justify-center mt-96">
            <div className="flex flex-col ">
                <h2 className="text-xl font-semibold">
                    MAKE DAY PRODUCTIVE BY TAKING TRACK OF YOUR TODO&apos;s
                </h2>
                <div className="mx-auto">
                    {user && (
                        <div className="mt-4 px-3 py-1 bg-white rounded-lg text-black font-semibold flex items-center">
                            <Link href="/addTask">Add Task</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
