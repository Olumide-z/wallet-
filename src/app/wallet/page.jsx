import Wallet from '@/components/Wallet'
import React from 'react'

const page = () => {
  return (
    <div className="bg-[#fafafa] pt-[5rem] flex items-center justify-center flex-col">
      <h1 className='text-[1.3rem] py-6 font-[600] text-[var(--color-black)]'>Connect Wallet</h1>
      <Wallet />
    </div>
  )
}

export default page