import React from "react";

export default function Navbar(){
    return(
        <nav className="flex justify-around py-5 sticky top-0 bg-white z-10">
            <img src="\images\logo.svg" alt="" className="w-[100px]"/>
            <div className="flex gap-5 text-sm">
                <button>Features</button>
                <button>Team</button>
                <button>Sign In</button>
            </div>
        </nav>
    )
}