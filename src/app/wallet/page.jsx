import Wallet from '@/components/Wallet'
import React from 'react'

const page = () => {
  return (
    <div className="bg-[#030416] pt-[5rem] flex items-center justify-center flex-col">
      <h1 className='text-[1.3rem] md:text-[1.6rem] py-6 font-[600] text-white'>Connect Wallet</h1>
      <Wallet />
    </div>
  )
}

export default page