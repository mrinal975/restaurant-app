import React from "react";
const Tailwind =()=>{
    return (
        <div className="mx-4 px-4">
            <nav className="bg-purple-800 text-white">
                <ul className="flex justify-end">
                    <li className="mx-2 cursor-pointer">Home</li>
                    <li className="mx-2 cursor-pointer">About</li>
                    <li className="mx-2 cursor-pointer">Contact</li>
                    <li className="mx-2 cursor-pointer">Profile</li>
                </ul>
            </nav>
            <div className="container">
                <h1 className="text-blue-900 mx-14">
                    This is blue text
                </h1>
            </div>
        </div>
    );
}

export default Tailwind;