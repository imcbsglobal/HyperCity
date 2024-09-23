import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../assets/logo-white.png"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='grid grid-cols-1  md:grid-cols-2 mx-auto lg:grid-cols-4 llg:flex llg:justify-center md:px-6  pt-10 llg:max-w-[1400px]'>
        {/* First Div */}
      <div className=' flex flex-col justify-start items-start gap-3 px-6 mb-10 text-start'>
        <Link to="/">
          <div className=' w-[200px] h-[150px]'>
              <img src={logo} className='w-full h-full object-contain drop-shadow-sm' alt="" />
          </div>
        </Link>
        <div className=' titleText font-bold text-[#ecebeb] text-sm'>
          Have questions? Reach out to us for support and ensure your satisfaction.
        </div>
        <div>
            <div className=' titleText2 font-bold mb-2 text-[#ffffff]'>Customer Care Number</div>
            <div className=' flex justify-start items-center gap-2'>
               <a href="tel:+91 9539336622" className=' flex justify-center items-center gap-2'>
                 {/* Icon */}
                 <div><FaPhoneAlt className='text-2xl text-[#ecebeb]'/></div>
                {/* Phone Nuumber */}
                <div className=' titleText2 text-[20px] text-[#ecebeb]'>+91 9539336622</div>
               </a>
            </div>
            <div className='flex justify-start mt-4 gap-3'>
                {/* Icons */}
                <a href="https://www.facebook.com/share/gWeumQK6EJRjywHQ/?mibextid=qi2Omg"><div><FaFacebook className='text-3xl cursor-pointer text-[#ecebeb]'/></div></a>
                <a href="mailto:info@hypercityhypermarket.com"><div><MdEmail className='text-3xl cursor-pointer text-[#ecebeb]'/></div></a>
                <a href="https://www.instagram.com/hypercitykambalakkad?utm_source=qr&igsh=ZzhpemJuaXNuaHM="><div><AiFillInstagram className='text-3xl cursor-pointer text-[#ecebeb]'/></div></a>
            </div>
        </div>
      </div>

      {/* Seconf Div */}
      <div className=' px-6 mb-10 text-start'>
        <div className='text-[26px] titleText2 mb-3 text-[#ffff]'>Explore</div>
        <div>
            <ul className=' flex flex-col gap-2 font-bold titleText text-[#ecebeb]'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/products'><li>Products</li></Link>
                <Link to='/branch'><li>Branch</li></Link>
                <Link to='/gallery'><li>Gallery</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </div>
      </div>

      {/* Thrid Div Address1 */}
      <div className='px-6 mb-10 mx-auto flex flex-col justify-start items-start text-start'>
        <div className='mb-2 titleText2 text-[26px] text-[#ffff]'>Hyper City Kamblakkad</div>
        <div className=' titleText font-bold mb-1 text-[#ecebeb]'>Hyper City Hypermarket 
          Kamblakkad, Wayanad, Kerala 
        </div>
        <div className='titleText font-bold mb-3 text-[#ecebeb]'>Pin - 673122</div>
        <a href="tel:+919539336622">
          <div className='flex items-center gap-3'>
              <div><FaPhoneAlt className='text-[#ecebeb]'/></div>
              <div className=' titleText2 text-[#ecebeb]'>+91 7034173173</div>
          </div>
        </a>
        <a href="mailto:info@hypercityhypermarket.com">
          <div className=' flex items-center gap-3 mt-2'>
              <div><MdEmail className='text-[#ecebeb]'/></div>
              <div className='titleText2 text-[#ecebeb]'>info@hypercityhypermarket.com</div>
          </div>
        </a>
      </div>

      {/* Fourth Div Address2 */}
      <div className='px-6 mb-10 mx-auto flex flex-col justify-start items-start text-start'>
        <div className='mb-2 titleText2 text-[26px] text-[#ffff]'>Hyper City Manathavady</div>
        <div className=' titleText font-bold mb-1 text-[#ecebeb]'>Hyper City Hypermarket 
          Payod, Manathavady, Wayanad, Kerala 
        </div>
        <div className='titleText font-bold mb-3 text-[#ecebeb]'>Pin - 670645</div>
        <a href="tel:+919539336622">
          <div className='flex items-center gap-3'>
              <div><FaPhoneAlt className='text-[#ecebeb]'/></div>
              <div className=' titleText2 text-[#ecebeb]'>+91 9539336622</div>
          </div>
        </a>
        <a href="mailto:info@hypercityhypermarket.com">
          <div className=' flex items-center gap-3 mt-2'>
              <div><MdEmail className='text-[#ecebeb]'/></div>
              <div className='titleText2 text-[#ecebeb]'>info@hypercityhypermarket.com</div>
          </div>
        </a>
      </div>

      <div className='px-6 mb-10 mx-auto flex flex-col justify-start items-start text-start'>
        <div className='mb-2 titleText2 text-[26px] text-[#ffff]'>Hyper City Kadavathur</div>
        <div className=' titleText font-bold mb-1 text-[#ecebeb]'>Hyper City Hypermarket 
          Kadavathur, Kannur, Kerala 
        </div>
        <div className='titleText font-bold mb-3 text-[#ecebeb]'>Pin - 670676</div>
        <a href="tel:+919539336622">
          <div className='flex items-center gap-3'>
              <div><FaPhoneAlt className='text-[#ecebeb]'/></div>
              <div className=' titleText2 text-[#ecebeb]'>+91 8078962425</div>
          </div>
        </a>
        <a href="mailto:info@hypercityhypermarket.com">
          <div className=' flex items-center gap-3 mt-2'>
              <div><MdEmail className='text-[#ecebeb]'/></div>
              <div className='titleText2 text-[#ecebeb]'>info@hypercityhypermarket.com</div>
          </div>
        </a>
      </div>

    </div>
  )
}

export default Footer
