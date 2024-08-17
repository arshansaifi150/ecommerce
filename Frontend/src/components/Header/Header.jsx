import React from 'react'
import {Search, ShoppingCart} from '@mui/icons-material';

function Header() {
  return (
    <>
    <div className='w-full h-[6vh] bg-[#606060] flex justify-around items-center text-gray-300 text-sm'>
        <div className=''>
            Free Shipping for standard order over $200
        </div>
        <div className=''>
            <button className='px-6 border-x-2'>Help&FAQs </button>
            <button className='px-6 border-x-1'>My Account</button>
            <button className='px-6 border-x-2'>EN</button>
            <button className='px-6 border-r-2'>USD</button>
        </div>
    </div>
    <div className='w-full h-[15vh] bg-none z-10 sticky flex items-center justify-center'>
        <div className='w-[80%] flex justify-between items-center'>
            <div className='flex gap-16 w-[50%] text-slate-100'>
                <div className='text-xl font-semibold italic'>E Commerce</div>
                <div>
                    <ul className='flex gap-10 items-center font-semibold'>
                        
                        <li>Home</li>
                        <li>Product</li>
                        <li>About</li>

                    </ul>
                </div>
            </div>
            <div className='flex gap-5 items-center w-[50%]'>
                <input type="search" placeholder='Search' className='p-2 w-full bg-slate-200 outline-slate-200 rounded-sm  placeholder:text-gray-500'/>
                <Search className='cursor-pointer text-slate-100'/>
                <ShoppingCart className='text-3xl text-slate-100 cursor-pointer'/>

            </div>
        </div>
    </div>
    </>
  )
}

export default Header