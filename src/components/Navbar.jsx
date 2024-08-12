import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { CgMenuGridO } from "react-icons/cg";
import MobileNavbar from './MobileNavbar';

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
        <header className=' w-full px-6 py-2'>
          <nav className=' flex justify-between items-center'>
            <div className=' w-auto h-[80px]'>
              <img src={logo} className=' w-full h-full object-contain drop-shadow-sm' alt="" />
            </div>
            <div className='hidden md:flex md:justify-center md:items-center'>
              <ul className=' flex justify-center items-center gap-5'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/branch'>Branch</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
            </div>
            <div className=' md:hidden'>
              <CgMenuGridO onClick={handleMenu} className='text-3xl text-[#059328] font-bold cursor-pointer drop-shadow-lg' />
            </div>
          </nav>
        </header>
      )}
    </div>
  )
}

export default Navbar
