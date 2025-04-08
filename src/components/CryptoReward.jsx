import Link from "next/link";

export default function CryptoReward() {
    return (
      <section className="w-full md:py-20 py-8 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Real-world adoption of blockchain technology is what we do.
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Consumers across the world use VeChain powered solutions on a daily basis.
          </p>
          <Link href='/wallet'>
          <button className="mt-6 bg-[#00bed8] w-fit cursor-pointer text-white px-6 py-3 rounded-full md:text-lg text-base font-medium transition hover:bg-white hover:text-[#00bed8]">
            Get Crypto Rewards
          </button>
          </Link>
        </div>
      </section>
    );
  }
  