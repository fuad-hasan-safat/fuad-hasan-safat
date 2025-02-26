import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-center bg-gray-200/80 shadow-lg shadow-slate-50 backdrop-blur-sm mb-[100px] py-[25px] p-[25px] rounded-lg w-full z-50'>
      <div>
        <p className='font-playwrite text-center text-sm text-gray-700'>
          &copy; {new Date().getFullYear()} Fuad Hasan Safat. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}
