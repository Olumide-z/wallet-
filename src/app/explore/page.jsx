import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="pt-[70px] px-10 w-full flex justify-center items-center h-screen">
      <div className="flex items-center gap-4 lg:w-[85%] w-full">
        {/* Text Section */}
        <div className="w-full md:w-[60%] text-center md:text-left px-4">
          <h3 className="text-lg ">Take control of your money</h3>
          <h1 className="text-[2rem] md:text-[2.5rem] font-bold mt-2 md:w-[90%] w-full">
            Start your portfolio today and discover crypto
          </h1>
          <Link href="/wallet">
            <button className="mt-3 cursor-pointer bg-[#27548A] text-white px-4 py-2 rounded-lg transition">
              Crypto Exchange
            </button>
          </Link>
        </div>

        {/* Image Section - Hidden on Mobile */}
        <div className="hidden md:block w-[40%]">
          <img
            src="/images/explore.jpg"
            className="object-cover w-full h-[300px]"
            alt="Explore Crypto"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
