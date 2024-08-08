"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Signup = () => {
    const router = useRouter();
    const [user, setUser] = useState({ username: "", email: "", password: "" });

    const [disabled, setAsDisable] = useState(false);

    useEffect(() => {
        if (
            user.username.length > 0 &&
            user.email.length > 0 &&
            user.password.length > 0
        ) {
            setAsDisable(false);
        } else {
            setAsDisable(true);
        }
    }, [user.username.length, user.email.length, user.password.length]);

    const onSignup = async () => {
        try {
            const response = await axios.post("/api/users/signup", user);
            console.log("signup successful", response.data);
            router.push("/login");
        } catch (error) {
            console.log({ message: "signup failed", error: error });
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen text-lg">
            <h1 className="font-semibold text-lg sm:text-xl">SignUp!</h1>
            <hr />
            <form className="flex flex-col text-balance " onSubmit={onSignup}>
                <label htmlFor="username" className="pl-2 mt-2">
                    username
                </label>
                <input
                    className="rounded-lg p-1 pl-2 m-1 text-black"
                    type="username"
                    name="username"
                    placeholder="username"
                    value={user.username}
                    onChange={(e) => {
                        setUser({ ...user, username: e.target.value });
                    }}
                />
                <label htmlFor="email" className="pl-2 mt-2">
                    email
                </label>
                <input
                    className="rounded-lg p-1 pl-2 m-1 text-black"
                    type="email"
                    name="email"
                    placeholder="email"
                    value={user.email}
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                    }}
                />
                <label htmlFor="password" className="pl-2 mt-2">
                    password
                </label>
                <input
                    className="rounded-lg p-1 pl-2 m-1 text-black"
                    type="password"
                    ame="password"
                    placeholder="password"
                    value={user.password}
                    onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                    }}
                />
            </form>
            <button
                type="submit"
                onClick={onSignup}
                className="w-40 mt-2 px-3 py-1 bg-white rounded-lg text-base sm:text-lg text-black font-semibold"
                disabled={disabled}
            >
                {disabled ? "No SignUp" : "SignUp"}
            </button>
        </div>
    );
};

export default Signup;
