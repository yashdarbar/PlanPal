"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import UserContext from "@/context/userContext";
import toast from "react-hot-toast";

const Login = () => {
    const router = useRouter();
    const [userl, setUserl] = useState({ email: "", password: "" });
    const { user, setUser } = useContext(UserContext);
    const [disabled, setAsDisable] = useState(false);

    useEffect(() => {
        if (userl.email.length > 0 && userl.password.length > 0) {
            setAsDisable(false);
        } else {
            setAsDisable(true);
        }
    }, [userl]);

    const onLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/users/login", userl);
            setUser(response.data);
            toast.success("User successfully logged in");
           // console.log("resopndata", response.data);
            //router.refresh();
            router.push("/addTask");
        } catch (error) {
            toast.error("Login failed");
            console.log("login is failed", error);
        }
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-80 text-lg">
                <h1 className="font-semibold text-lg sm:text-xl">Login!</h1>
                <hr />
                <form className="flex flex-col" onSubmit={onLogin}>
                    <label htmlFor="email" className="pl-2 mt-2">
                        email
                    </label>
                    <input
                        className="rounded-lg p-1 pl-2 m-1 text-black"
                        type="email"
                        name="email"
                        placeholder="email"
                        value={userl.email}
                        onChange={(e) => {
                            setUserl({ ...userl, email: e.target.value });
                        }}
                    />
                    <label htmlFor="password" className="pl-2 mt-2">
                        password
                    </label>
                    <input
                        className="rounded-lg p-1 pl-2 m-1 text-black"
                        type="password"
                        name="password"
                        placeholder="password"
                        value={userl.password}
                        onChange={(e) => {
                            setUserl({ ...userl, password: e.target.value });
                        }}
                    />
                </form>
                <button
                    type="submit"
                    onClick={onLogin}
                    className="w-40 mt-2 px-3 py-1 bg-white rounded-lg text-base sm:text-lg text-black font-semibold"
                    disabled={disabled}
                >
                    {disabled ? "No Login" : "Login"}
                </button>
            </div>
        </div>
    );
};

export default Login;
