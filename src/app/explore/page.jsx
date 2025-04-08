import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="pt-[70px] bg-[#e8eced] md:px-10 px-6 w-full flex justify-center items-center md:h-[500px] h-[450px]">
      <div className="flex items-center gap-4 lg:w-[85%] w-full">
        {/* Text Section */}
        <div className="w-full md:w-[60%] text-center md:text-left px-4">
          <h3 className="text-lg ">Take control of your money</h3>
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold mt-2 md:w-[90%] w-full">
            Make your Crypto work for you
          </h1>
          <Link href="/wallet">
          <button className="mt-6 bg-[#00bed8] w-[200px] cursor-pointer text-white px-6 py-3 rounded-full text-lg font-medium transition hover:bg-white hover:text-[#00bed8]">
            Explore
          </button>
          </Link>
        </div>

        {/* Image Section - Hidden on Mobile */}
        <div className="hidden md:block w-[40%]">
          <img
            src="/images/explore.png"
            className="object-cover w-full h-[300px]"
            alt="Explore Crypto"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
