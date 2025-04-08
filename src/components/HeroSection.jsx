import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div
      className="w-full md:h-[500px] h-[450px] flex justify-center items-center px-4 md:px-8 bg-[#250486] text-white bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/header-background.svg)' }}
    >
      <div className="text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
        <h1 className="text-[2.5rem] sm:text-5xl md:text-[4.5rem] font-bold">
          VeChain
        </h1>
        <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-[1.5rem]">
          Web3 for better
        </p>
        <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-200">
          Empowering businesses with blockchain solutions for a more transparent and efficient future.
        </p>
        
        <a
          href="#explore"
          className="mt-6 inline-block bg-[#00bed8] w-[200px] cursor-pointer text-white px-6 py-3 rounded-full text-lg font-medium transition hover:bg-white hover:text-[#00bed8]"
        >
          Explore
        </a>
        
      </div>
    </div>
  );
};

export default HeroSection;
