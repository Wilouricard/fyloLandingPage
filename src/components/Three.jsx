import React from "react";

export default function Three() {
  return (
    <div className="purple">
      <div className="text-center pt-16 flex flex-col gap-5 text-white">
        <h1 className="font-bold text-xl">Get early access today</h1>
        <p className="text-md px-5">
        It only takes a minute to sign up and our free starter tier is extremely generous. 
  If you have any questions, our support team would be happy to help you.
        </p>
      </div>
      <form className="flex flex-col mx-16 pt-10 gap-3 pb-16">
        <input type="email" placeholder="email@example.com" required className="border py-3 rounded-md border-gray-600 pl-6"/>
        <button className="blue py-3 rounded-md text-white font-bold shadow-md">Get Started For Free</button>
      </form>
    </div>
  );
}
