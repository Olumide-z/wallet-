import Link from "next/link";

export default function Home() {
  return (
    <div 
      className="w-full min-h-screen flex justify-center items-center px-4 md:px-8 bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div className="text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl bg-white/80 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
          Powering the Future
        </h1>
        <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-700">
          Decentralized GPU infrastructure built for AI and gaming. Backed by industry leaders, we are reshaping the landscape of computing with unmatched power and scalability.
        </p>
        <Link href='/wallet'>
          <button className="mt-6 bg-[#27548A] text-white px-6 py-3 rounded-md text-lg font-medium transition hover:bg-[#1f3e68]">
            Connect Wallet
          </button>
        </Link>
      </div>
    </div>
  );
}
