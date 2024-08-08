import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  return (
    <div>
      <header className=' w-full px-6 py-2'>
        <nav className=' flex justify-between items-center'>
            <div className=' w-auto h-[80px]'>
                <img src={logo} className=' w-full h-full object-contain drop-shadow-sm' alt="" />
            </div>
            <div className='hidden md:flex md:justify-center md:items-center'>
                <ul className=' flex justify-center items-center gap-5'>
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Brach</Link></li>
                    <li><Link>Products</Link></li>
                    <li><Link>Gallery</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
            </div>
            <div>
              <CgMenuGridO className='text-3xl text-[#059328] font-bold cursor-pointer drop-shadow-lg'/>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
