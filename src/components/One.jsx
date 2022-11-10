import React from "react";

export default function One() {
  return (
    <div className="px-4">
      <img src="\images\illustration-1.svg" alt="" className="pt-12"/>
      <div className="text-center pt-10 flex flex-col gap-5">
        <h1 className="font-bold text-3xl">All your files in one secure location, accessible anywhere.</h1>
        <p className="text-md px-5">
        Fylo stores your most important files in one secure location. 
  Access them wherever you need, share and collaborate with friends, 
  family, and co-workers.
        </p>
      </div>
      <form className="flex flex-col mx-5 pt-10 gap-5 pb-20">
        <input type="email" placeholder="Enter your email..." required className="border py-3 rounded-md border-gray-600 pl-6"/>
        <button className="blue py-3 rounded-md text-white font-bold shadow-md">Get Started</button>
      </form>
    </div>
  );
}
