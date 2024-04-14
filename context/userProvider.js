"use client";

import UserContext from "./userContext";
import { useEffect, useState } from "react";
import axios from "axios";

const userProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const verifyUser = async () => {
            try {
                // const userv = await axios.post("/api/connect", user);
                // setUser({ ...userv });
                // console.log(user);
                const response = await axios.get("/api/connect");
                //console.log(response.data._id);
                setUser(response.data._id);
            } catch (error) {
                console.error(error.message);
            }
        };
        verifyUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default userProvider;
