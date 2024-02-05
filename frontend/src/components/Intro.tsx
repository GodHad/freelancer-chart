import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Intro() {
  
  return (
    <div className="border-b w-[98%] p-5 box-content bg-gray-800 text-white">
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap mt-5">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Freelancer Bid Helper - For Freelancer Bidding Easily
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                It will be help you for bidding on freelancer. First of all, you
                have to install extension that I made. <br />
                URL:{" "}
                <a
                  className="underline text-blue-400 italic"
                  href="https://github.com/GodHad/freelancer-notifier"
                  target="_blank">
                  https://github.com/GodHad/freelancer-notifier
                </a>
              </p>
              <div className="mt-12">
                <Link
                  to="/main"
                  className="get-started bg-cyan-500 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={"/assets/img/pattern_react.png"}
          alt="..."
        />
      </section>
    </div>
  );
}

export default Intro;
