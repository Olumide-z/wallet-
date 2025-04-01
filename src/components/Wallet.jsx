"use client";

import { walletData } from "@/data";
import React, { useState } from "react";
import Modal from "./Modal";

const Wallet = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null); // State to store selected wallet info

  const handleOpenModal = (wallet) => {
    setSelectedWallet(wallet); // Store clicked wallet data
    setOpenModal(true); // Open modal
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {walletData.map((item, index) => (
        <div
          key={index}
          className="bg-white/70 p-4 rounded-xl text-[var(--color-black)] flex flex-col items-center text-center"
        >
          <img
            src={item.image}
            className="w-16 h-16 rounded-full object-cover mb-3"
            alt={item.name}
          />
          <p className="text-lg font-semibold">{item.name}</p>
          <p className="text-sm text-[var(--color-black)]">{item.desc}</p>
          <button
            onClick={() => handleOpenModal(item)} // Pass the clicked wallet data
            className="mt-3 cursor-pointer bg-[#27548A] text-white px-4 py-2 rounded-lg transition"
          >
            Connect Wallet
          </button>
        </div>
      ))}
      
      {openModal && (
        <Modal setOpenModal={setOpenModal} wallet={selectedWallet} />
      )}
    </div>
  );
};

export default Wallet;
