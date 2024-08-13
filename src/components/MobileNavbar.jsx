import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineCloseFullscreen } from "react-icons/md";
import logo from "../assets/logo.png"
import mobileBg1 from "../assets/mobil-bg1.jpg"
import mobileBg2 from "../assets/mobile-bg2.jpg"
import mobileFooterImg from "../assets/mobile-footer-img.png"

const MobileNavbar = ({ handleMenu }) => {
  return (
    <div>
      <div className='fixed h-full w-full z-[999] flex justify-center items-center bg-[#ffff] mobileNavbarBg'>
        <div className='absolute -z-20 top-0 left-0 bottom-0 right-0'>
          <img src={mobileBg1} className='w-full h-full object-cover' alt="" />
        </div>
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
        <div className='absolute bottom-0 w-full h-[100px] bg-[#FF6C00] rounded-t-3xl '>
          <div className='w-auto h-[250px] absolute top-[-120px]'>
            <img src={mobileFooterImg} className=' w-full h-full' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar
