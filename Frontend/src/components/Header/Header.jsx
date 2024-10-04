import React, { useEffect, useState } from 'react'
import { AccountCircle, Search, ShoppingCart } from '@mui/icons-material';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation()

    const [isScrolled, setIsScrolled] = useState(false);

    const [color, setColor] = useState({
        textColor: "text-slate-100",
        scrolledTextColor: "text-gray-700",
        backgroundColor: "bg-none",
        scrolledBackgroundColor: "bg-white",
    })

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (location.pathname === "/") {
            setColor({
                textColor: "text-slate-100",
                scrolledTextColor: "text-gray-700",
                backgroundColor: "bg-none",
                scrolledBackgroundColor: "bg-gray-300",
            })
        } else {
            setColor({
                textColor: "text-gray-500",
                scrolledTextColor: "text-gray-700",
                backgroundColor: "bg-gray-300",
                scrolledBackgroundColor: "bg-gray-300",
            })
        }
    }, [location])

    return (
        <>
            <div className='w-full h-[6vh] bg-[#606060] flex justify-around items-center text-gray-300 text-sm '>
                <div className=''>
                    Free Shipping for standard order over $200
                </div>
                <div className='cursor-pointer'>
                    <button className='px-6 border-x-2'>Help&FAQs </button>
                    <Link to={'/Signup'}>
                        <button className='px-6 border-x-1'>My Account</button>
                    </Link>
                    <button className='px-6 border-x-2'>EN</button>
                    <button className='px-6 border-r-2'>USD</button>
                </div>
            </div>
            <div className={`w-full h-[15vh] z-10 sticky top-0 flex items-center justify-center transition-colors duration-300 ${
                isScrolled ? color.scrolledBackgroundColor : color.backgroundColor
            }`}>
                <div className='w-[80%] flex justify-between items-center'>
                    <div className={`flex gap-16 w-[50%] ${isScrolled ? color.scrolledTextColor : color.textColor}`}>
                        <NavLink to={'/'}>
                            <div className='text-xl font-semibold italic cursor-pointer'>E Commerce</div>
                        </NavLink>
                        <div>
                            <ul className='flex gap-10 items-center font-semibold'>
                                <NavLink to={'/'}>
                                    <li className='cursor-pointer'>Home</li>
                                </NavLink>
                                <NavLink to={'/Products'}>
                                    <li className='cursor-pointer'>Product</li>
                                </NavLink>
                                <NavLink to={'/About'}>
                                    <li className='cursor-pointer'>About</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center w-[50%]'>
                        <input type="search" placeholder='Search' className='p-2 w-full bg-slate-200 outline-slate-200 rounded-sm  placeholder:text-gray-500'/>
                        <Search className={`cursor-pointer ${isScrolled ? color.scrolledTextColor : color.textColor}`} />
                        <ShoppingCart className={`text-3xl cursor-pointer ${isScrolled ? color.scrolledTextColor : color.textColor}`}/>
                        <AccountCircle className={`text-3xl cursor-pointer ${isScrolled ? color.scrolledTextColor : color.textColor}`}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header