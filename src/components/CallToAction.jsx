"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const cards = [
  {
    title: "Explore Farming Options Defi Yield Farming",
    button: "Try Now",
  },
  {
    title:
      "Earn Rewards by staking ETH Unlock the potential of your staked Coin!",
    button: "Try Now",
  },
  {
    title:
      "Maximize your returns and explore new opportunities within the decentralized finance (DeFi) ecosystem.",
    button: "Try Now",
  },
  {
    title: "Try DApps Now Finance, gaming, social, Web3, Smart Contracts",
    button: "Try Now",
  },
  {
    title: "Access Pool Tokens on Multiple Chains ",
    button: "Try Now",
  },
  {
    title: "Earn on NTFs",
    button: "Try Now",
  },
];

export default function CallToAction() {
  return (
    <div className="w-full px-6 md:py-16 py-8 bg-[#e8eced]">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Earn on Crypto
      </h2>
      <p className="text-center text-[1.1rem] mb-8">Upcoming Sales</p>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // ✅ Enables infinite scroll
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          1024: { slidesPerView: 2 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#171717] text-white rounded-2xl shadow-lg p-8 h-fit flex flex-col justify-between">
              <div>
                <h3 className="md:text-[2rem] text-[1.7rem] md:leading-12 leading-10 font-semibold mb-4">
                  {card.title}
                </h3>
              </div>
              <Link href="/wallet">
                <button className="mt-6 bg-[#250486] w-[200px] cursor-pointer text-white px-6 py-3 rounded-full text-lg font-medium transition hover:bg-white hover:text-[#00bed8]">
                  {card.button}
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Custom pagination container below the carousel */}
      <div className="custom-pagination flex justify-center mt-6"></div>
    </div>
  );
}
