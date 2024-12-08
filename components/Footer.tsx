import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-center bg-blue-500/60 shadow-lg shadow-slate-50 backdrop-blur-sm mb-[100px] py-[25px] p-[25px] rounded-lg w-full'>
      <div>
        <p className='font-playwrite text-center text-sm text-white'>
          &copy; {new Date().getFullYear()} Fuad Hasan Safat. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}
