import React from "react";

export default function Two() {
  return (
    <div className="">
      <img src="public\images\bg-curve-mobile.svg" alt="" className="w-full translate-y-2 z-0 relative"/>
      <div className="light-blue px-4">
        <img src="\images\illustration-2.svg" alt="" className="pt-8"/>
        <div className="pt-10 flex flex-col gap-5">
          <h1 className="font-bold text-xl text-center">
            Stay productive, wherever you are
          </h1>
          <p className="text-md px-4 text-slate-700">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="text-md px-4 text-slate-700">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
          <a
            href="#"
            className="flex text-green-500 underline gap-1 text-sm mr-auto ml-auto"
          >
            See how Fylo works{" "}
            <i className="pt-1">
              <img src="\images\icon-arrow.svg" alt="" />
            </i>
          </a>

          <div className="bg-white py-6 px-6 shadow-md w-[350px] flex flex-col mr-auto ml-auto rounded-md mb-20">
            <img
              src="\images\icon-quotes.svg"
              alt=""
              className="pb-2 w-[20px]"
            />
            <p className="text-xs font-bold pb-4">
              {" "}
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex items-center gap-3">
              <img
                src="\images\avatar-testimonial.jpg"
                alt=""
                className="rounded-full w-[50px]"
              />
              <div>
                <h2 className="font-bold text-sm">Kyle Burton</h2>
                <p className="text-xs">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
