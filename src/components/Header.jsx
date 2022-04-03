import React from 'react'
import illustration from "../images/illustration-working.svg"
export const Header = () => {
  return (
    <div className='flex mt-8 mb-20'>
        <div className=' flex flex-col basis-1/2 justify-center  '>
          <div className=' flex flex-col items-center'>
          <h2 className='text-6xl font-bold w-2/3'>More than just Shorter Links</h2>
            <p className='text-slate-500 font-medium w-2/3 text-lg mt-8 mb-8'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          </div>
            <div className='text-center w-1/2'>

            <button className=' font-semibold p-2.5 w-36 text-stone-100  bg-cyan-500 hover:bg-cyan-600 rounded-full'>Get Started</button>
            </div>
        </div>
        <div className='flex basis-1/2 justify-end'>
            <img className=' w-10/12' src={illustration} alt="illustration" />
        </div>
    </div>
  )
}
