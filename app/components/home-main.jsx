"use client";

import UserContext from "@/context/userContext";
import Link from "next/link";
import { useContext } from "react";

export const HomeMain = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div>
                <h2 className="text-xl font-semibold">
                    MAKE DAY PRODUCTIVE BY TAKING TRACK OF YOUR TODO&apos;s
                </h2>
                {user && (
                    <div className="mt-2 px-3 py-1 bg-white rounded-lg text-black font-semibold">
                        <Link href={"/addTask"}>Add Task</Link>
                    </div>
                )}
            </div>
        </div>
    );
};
