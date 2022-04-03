import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-around basis-full items-center pt-4'>
    <div className='flex basis-1/6 justify-end'>
      <h2 className='text-xl font-semibold'>Shortly</h2>
    </div>
        <div className='flex basis-6/12  justify-items-start font-medium text-slate-400'>
          <h3 className='mr-8 cursor-pointer'>Features</h3>
          <h3 className='mr-8 cursor-pointer'>Pricing</h3>
          <h3 className='mr-8 cursor-pointer'>Resources</h3>
        </div>

        <div className='flex basis-3/12 justify-items-center'>
          <button className='text-slate-500 font-normal'>Login</button>
          <button className='ml-8 w-20 font-semibold p-0.5 text-stone-100  bg-cyan-500 hover:bg-cyan-600 rounded-full'>Sign Up</button>
        </div>
    </div>
  )
}
