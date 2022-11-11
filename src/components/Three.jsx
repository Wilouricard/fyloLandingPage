import React from "react";

export default function Three() {
  return (
    <div className="purple md:flex md:py-28">
      <div className="text-center pt-16 flex flex-col gap-5 text-white md:w-1/2 md:text-start md:pl-24 md:pr-40 md:pt-0">
        <h1 className="font-bold text-xl md:text-3xl">Get early access today</h1>
        <p className="text-md px-5 md:px-0">
        It only takes a minute to sign up and our free starter tier is extremely generous. 
  If you have any questions, our support team would be happy to help you.
        </p>
      </div>
      <form className="flex flex-col mx-16 pt-10 gap-3 pb-16 md:w-1/2 md:p-0 md:px-20 md:gap-5">
        <input type="email" placeholder="email@example.com" required className="border py-3 rounded-md border-gray-600 pl-6"/>
        <button className="blue py-3 rounded-md text-white font-bold shadow-md md:w-1/3">Get Started For Free</button>
      </form>
    </div>
  );
}
