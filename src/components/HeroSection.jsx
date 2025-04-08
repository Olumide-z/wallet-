import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="w-full h-[500px] flex justify-center items-center px-4 md:px-8 bg-[#250486] text-white">
      <div className="text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-bold">
          VeChain
        </h1>
        <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-[1.5rem]">
          Web3 for better
        </p>
        <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-200">
          Empowering businesses with blockchain solutions for a more transparent and efficient future.
        </p>
        <Link href="/explore">
          <button className="mt-6 bg-[#00bed8] w-[200px] cursor-pointer text-white px-6 py-3 rounded-full text-lg font-medium transition hover:bg-white hover:text-[#00bed8]">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
