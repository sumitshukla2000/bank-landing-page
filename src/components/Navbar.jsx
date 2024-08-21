import React, { useState } from 'react'
import {close , logo , menu} from '../assets'
import { navLinks } from '../constants'
const Navbar = () => {
    const [active , setActive] = useState("Home")
    const [toggle , setToggle] = useState(false);

  return (
    <nav className='w-full py-6 flex justify-between items-center'>
        <img src={logo} alt="logo" className='w-[124px] h-[32px]' />

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav , index)=>(
                <li key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? "mr-0" : "mr-10"}
                ${active === nav.title ? "text-white" : "text-dimWhite"}`}
                onClick={()=>setActive(nav.title)}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
            ))}
        </ul>

        <div className='sm:hidden flex justify-end items-center flex-1 '>
        <img src={toggle ? close : menu} className='w-[28px] h-[28px] object-contain' alt="menu"
        onClick={()=>setToggle(prev => !prev)} />

        <div className={`${toggle ? 'flex' : 'hidden'} 
        py-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]
        rounded-xl sidebar`}>
                 <ul className='list-none sm:hidden flex justify-end flex-col items-center flex-1'>
            {navLinks.map((nav , index)=>(
                <li key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? "mb-0" : "mb-10"}
                ${active === nav.title ? "text-white" : "text-dimWhite"}`}
                onClick={()=>setActive(nav.title)}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
            ))}
        </ul>
        </div>

        </div>
        
    </nav>
  )
}

export default Navbar