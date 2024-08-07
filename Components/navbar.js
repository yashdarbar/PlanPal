"use client";

import Link from "next/link";
import { useContext } from "react";
import UserContext from "../context/userContext";
import axios from "axios";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter()
    const { user } = useContext(UserContext);

    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            router.push("/login");
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="min-h-full w-full">
            <div>
                <nav className="flex justify-between mx-4 my-2 font-semibold">
                    <div className="text-xl sm:text-2xl md:text-3xl sm:ml-10 my-3">
                        <Link href={"/"}>ToDo.</Link>
                    </div>
                    {!user && (
                        <div className="flex my-3 md:mx-8 text-md sm:text-2xl md:text-3xl">
                            <div className="mx-3">
                                <Link href={"/login"}>Login</Link>
                            </div>
                            <div className="mx-3">
                                <Link href={"/signup"}>SignUp</Link>
                            </div>
                        </div>
                    )}

                    {user && (
                        <div className="flex my-3 md:mx-8 text-md sm:text-2xl md:text-3xl">
                            <div className="mx-3">
                                <Link href={"/showTask"}>Show Task</Link>
                            </div>
                            <div className="mx-3">
                                <Link href={"/addTask"}>Add Task</Link>
                            </div>
                        </div>
                    )}

                    {user && (
                        <div className="flex my-3 md:mx-8 text-md sm:text-2xl md:text-3xl">
                            {/* <div className="mx-3">
                                <button>
                                    <Link onClick={"/showTask"}>Show Task</Link>
                                </button>
                            </div> */}
                            <div className="mx-3">
                                <button>
                                    <h1 onClick={logout}>Logout</h1>
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
