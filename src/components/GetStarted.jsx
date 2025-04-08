import Link from 'next/link';

const GetStarted = () => {
  return (
    <section className="bg-gradient-to-r from-[#250486] to-[#4a00e0] text-white py-16 px-6 md:px-12 rounded-2xl my-20 mx-4 md:mx-16 shadow-xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore Web3 with VeChain?</h2>
        <p className="text-md md:text-lg text-gray-200 mb-8">
          Join thousands of businesses leveraging blockchain for a more transparent and efficient future. Seamless onboarding. Real impact.
        </p>
        <Link href="/wallet">
          <button className="bg-[#00bed8] hover:bg-white hover:text-[#00bed8] text-white font-medium text-lg px-8 py-3 rounded-full transition-all duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default GetStarted;
