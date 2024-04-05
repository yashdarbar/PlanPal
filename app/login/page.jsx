"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const login = () => {
    const router = useRouter();
    const [user, setUser] = useState({ email: "", password: "" });

    const [disabled, setAsDisable] = useState(false);

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setAsDisable(false);
        } else {
            setAsDisable(true);
        }
    });

    const onLogin = async () => {
        try {
            const response = await axios.post("/api/users/login", user);
            console.log("login is successful", response.data);
            router.push("/addTask");
        } catch (error) {
            console.error(error);
            console.log("login is failed");
        }
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center min-h-screen text-lg">
                <h1 className="font-semibold">Login!</h1>
                <hr />
                <div className="flex flex-col ">
                    <label htmlFor="email" className="pl-2 mt-2">
                        email
                    </label>
                    <input
                        className="rounded-lg p-1 pl-2 m-1"
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
                        className="rounded-lg p-1 pl-2 m-1"
                        type="password"
                        name="password"
                        placeholder="password"
                        value={user.password}
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                        }}
                    />
                </div>
                <button
                    type="submit"
                    onClick={onLogin}
                    className="mt-2 px-3 py-1 bg-white rounded-lg text-black font-semibold"
                >
                    {disabled ? "No Login" : "Login"}
                </button>
            </div>
        </div>
    );
};

export default login;
