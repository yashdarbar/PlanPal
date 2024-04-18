"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import UserContext from "@/context/userContext";

const login = () => {
    const router = useRouter();
    const [userl, setUserl] = useState({ email: "", password: "" });
    const { user, setUser} = useContext(UserContext);
    const [disabled, setAsDisable] = useState(false);

    useEffect(() => {
        if (userl.email.length > 0 && userl.password.length > 0) {
            setAsDisable(false);
        } else {
            setAsDisable(true);
        }
    }, [userl]);

    const onLogin = async () => {
        //e.preventDefault();
        try {
            const response = await axios.post("/api/users/login", userl);
            console.log(response.data);
            // console.log("hhh",user);
            setUser(response.data);
            // console.log("xyz",setUser(response.data));
            router.push("/");
        } catch (error) {
            console.error(error);
            console.log("login is failed");
        }
    };

    // if (!user) {
    //     return <div>Loading...</div>;
    // }

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
                        value={userl.email}
                        onChange={(e) => {
                            setUserl({ ...userl, email: e.target.value });
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
                        value={userl.password}
                        onChange={(e) => {
                            setUserl({ ...userl, password: e.target.value });
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
