import React from "react";

export default function One() {
  return (
    <div className="px-4 md:flex md:flex-row-reverse md:mx-20 md:pb-14">
      <img src="\images\illustration-1.svg" alt="" className="pt-12 md:w-1/2 md:p-20" />
      <div className="md:1/2 md:mt-auto">
        <div className="text-center pt-10 flex flex-col gap-5 md:text-start">
          <h1 className="font-bold text-3xl md:text-4xl md:mr-24">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="text-md px-5 md:px-0 md:text-lg md:mr-28">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
        </div>
        <form className="flex flex-col mx-5 pt-10 gap-5 pb-20 md:mx-0 md:flex-row md:pr-36">
          <input
            type="email"
            placeholder="Enter your email..."
            required
            className="border py-3 rounded-md border-gray-600 pl-6 md:w-2/3"
          />
          <button className="blue py-3 rounded-md text-white font-bold shadow-md md:w-1/3">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}
