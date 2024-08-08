import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineCloseFullscreen } from "react-icons/md";
import logo from "../assets/logo.png"

const MobileNavbar = ({ handleMenu }) => {
  return (
    <div>
      <div className='fixed h-full w-full z-[999] flex justify-center items-center bg-[#ffff]'>
        <div className='absolute top-12 right-10'>
          <MdOutlineCloseFullscreen onClick={handleMenu} className='text-3xl cursor-pointer text-[#ffffff] drop-shadow-md bg-[#FF6C00] rounded-full p-1' />
        </div>
        <div className='absolute w-auto h-[80px] top-6 left-10'>
          <img src={logo} className='w-full h-full object-contain drop-shadow-sm' alt="" />
        </div>
        <nav className='flex justify-center items-center'>
          <ul className='flex flex-col justify-center items-center gap-5 titleText2 font-bold text-[#0cd50f]'>
            <li className='drop-shadow-sm'><Link onClick={handleMenu} to='/'>Home</Link></li>
            <li className='drop-shadow-sm'><Link onClick={handleMenu} to='/about'>About</Link></li>
            <li className='drop-shadow-sm'><Link onClick={handleMenu} to='/products'>Products</Link></li>
            <li className='drop-shadow-sm'><Link onClick={handleMenu} to='/branch'>Branch</Link></li>
            <li className='drop-shadow-sm'><Link onClick={handleMenu} to='/gallery'>Gallery</Link></li>
            <li className='drop-shadow-sm'><Link onClick={handleMenu} to='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MobileNavbar
