import Link from "next/link";

const Navbar = () => {
    return (
        <div className="min-h-full w-full">
            <div>
                <nav className="flex justify-between mx-4 my-2 font-semibold">
                    <div className="text-3xl ml-10 my-3">
                        <Link href={"/"}>ToDo.</Link>
                    </div>
                    <div className="flex my-3 mx-8 text-2xl">
                        <div className="mx-3">
                            <Link href={"/login"}>Login</Link>
                        </div>
                        <div className="mx-3">
                            <Link href={"/signup"}>SignUp</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;