import Link from 'next/link';
import { FaShieldAlt, FaBolt, FaLock, FaDollarSign } from 'react-icons/fa';

export default function VeBetter() {
  return (
    <section id='web3' className="w-full md:py-16 py-8 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            VeChain Smart Contracts
          </h2>
          <p className="text-gray-600 mb-6">
            Power your decentralized applications with secure, scalable, and cost-efficient smart contracts built on the VeChainThor blockchain.
          </p>
          <Link href='/wallet'>
          <button className="mt-6 bg-[#250486] w-[200px] cursor-pointer text-white px-6 py-3 rounded-full text-lg font-medium transition hover:bg-white hover:text-[#250486]">
            Explore VeBetter
          </button>
          </Link>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-4xl text-blue-600 mb-2" />
            <p className="text-lg font-semibold text-gray-700">Secure</p>
          </div>
          <div className="flex flex-col items-center">
            <FaBolt className="text-4xl text-blue-600 mb-2" />
            <p className="text-lg font-semibold text-gray-700">Fast</p>
          </div>
          <div className="flex flex-col items-center">
            <FaLock className="text-4xl text-blue-600 mb-2" />
            <p className="text-lg font-semibold text-gray-700">Safe</p>
          </div>
          <div className="flex flex-col items-center">
            <FaDollarSign className="text-4xl text-blue-600 mb-2" />
            <p className="text-lg font-semibold text-gray-700">Low Cost</p>
          </div>
        </div>
      </div>
    </section>
  );
}
