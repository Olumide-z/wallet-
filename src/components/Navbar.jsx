"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white bg-[#250486] p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href='/'><div className="text-2xl font-bold">VeChain</div></Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/explore">Explore</Link>
          <Link href="/wallet">Connect Wallet</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-[#030416] shadow-md p-4">
          <Link href="/explore">Explore</Link>
          <Link href="/wallet">Connect Wallet</Link>
        </div>
      )}
    </nav>
  );
}
