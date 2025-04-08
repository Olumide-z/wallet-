import Link from 'next/link';
import React from 'react';

const VeChainSection = () => {
  return (
    <section id='build' className="bg-gray-950 text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-400">
          VeChainThor (VET) & VeThor (VTHO)
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          <strong className="text-white">A Dual-Token Powerhouse</strong> – <span className='text-[0.9rem]'>VeChainThor utilizes a unique dual-token system.</span>
          <span className="block mt-2 text-[0.9rem]">
            <span className="text-blue-300 font-semibold">$VET</span> serves as the primary value-transfer token and is used for activities like staking and participating in governance.
            Holding <span className="text-blue-300 font-semibold">$VET</span> generates <span className="text-yellow-300 font-semibold">$VTHO</span>, which acts as the network's gas token, used to pay for transaction fees and smart contract execution.
          </span>
          <span className="block mt-2 text-[0.9rem]">
            This design separates the cost of using the blockchain from the speculative value of <span className="text-blue-300 font-semibold">$VET</span>,
            providing a more stable and predictable cost for enterprises utilizing the platform.
            A portion of the <span className="text-yellow-300 font-semibold">$VTHO</span> used in each transaction is burned, impacting supply dynamics.
          </span>
          <span className="block mt-2 text-[0.9rem]">
            This two-token model is central to VeChainThor's enterprise-focused approach, aiming to facilitate real-world adoption through cost-effectiveness and network efficiency.
          </span>
        </p>
        <div className="pt-4">
          <Link href='/wallet'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-md transition duration-300">
            Get $VET & $VTHO
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VeChainSection;
