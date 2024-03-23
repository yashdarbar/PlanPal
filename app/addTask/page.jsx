import React from "react";

const addTask = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center min-h-screen text-lg ">
                <h1 className="font-semibold">Task!</h1>
                <hr />
                <div className="flex flex-col w-1/4">
                    <label htmlFor="title" className="pl-2 mt-2">
                        title
                    </label>
                    <input
                        className="rounded-lg p-1 pl-2 m-1"
                        type="title"
                        name="title"
                        placeholder="title"
                        // value={user.title}
                        // onChange={(e) => {
                        //     setUser({ ...user, title: e.target.value });
                        // }}
                    />
                    <label htmlFor="body" className="pl-2 mt-2">
                        body
                    </label>
                    <textarea
                        rows={4}
                        className="rounded-lg p-1 pl-2 m-1"
                        type="body"
                        name="body"
                        placeholder="body"
                        // value={user.body}
                        // onChange={(e) => {
                        //     setUser({ ...user, body: e.target.value });
                        // }}
                    />
                </div>
                <button
                    type="submit"
                    // onClick={onLogin}
                    className="mt-2 px-3 py-1 bg-white rounded-lg text-black font-semibold"
                >
                    {/* {disabled ? "No Login" : "Login"} */}
                </button>
            </div>
        </div>
    );
};

export default addTask;
