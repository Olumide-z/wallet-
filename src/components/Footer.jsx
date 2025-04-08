import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <img src='/images/logo.png' className="w-[120px] h-[60px] object-contain"/>
          <p className="mt-2 text-sm text-gray-300">
            Web3 for better. Empowering transparent, secure, and efficient blockchain solutions.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/wallet">Wallet</Link></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: info@vechain.com</li>
            <li>Twitter: @vechainofficial</li>
            <li>Discord: Coming Soon</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-6 text-sm text-center text-gray-400">
        &copy; {new Date().getFullYear()} VeChain. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
