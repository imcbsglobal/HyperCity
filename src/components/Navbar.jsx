import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { CgMenuGridO } from "react-icons/cg";
import MobileNavbar from './MobileNavbar';
import { IoCallSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div>
      {menu ? (
        <div>
          <MobileNavbar handleMenu={handleMenu} />
        </div>
      ) : (
        <header className=' w-full px-6 py-2 fixed z-[999] navbarBg'>
          <nav className=' flex justify-between items-center lg:max-w-[1200px] lg:mx-auto'>
            <div className=' w-auto h-[80px]'>
              <img src={logo} className=' w-full h-full object-contain drop-shadow-sm' alt="" />
            </div>
            <div className='hidden md:flex md:justify-center md:items-center'>
              <ul className=' flex justify-center items-center gap-5 titleText font-bold text-[#494343]'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/branch'>Branch</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
            </div>
            <div className=' md:hidden flex items-center gap-5'>
              <FaUserCircle className='text-[25px] text-[#FF6C00] drop-shadow-md cursor-pointer'/>
              <CgMenuGridO onClick={handleMenu} className='text-3xl text-[#059328] font-bold cursor-pointer drop-shadow-lg' />
            </div>
            <div className=' hidden md:flex flex-col gap-2 text-[#494343]'>
              <div className=' flex items-center gap-2'>
                <div><IoCallSharp/></div>
                <div className=' font-bold'>+91 987575654567</div>
              </div>
              <div className=' flex items-center gap-2'>
                <div><HiOutlineMail/></div>
                <div className=' font-bold'>info@hypercity.com</div>
              </div>
            </div>
          </nav>
        </header>
      )}
    </div>
  )
}

export default Navbar
