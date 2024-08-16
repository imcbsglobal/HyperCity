import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../assets/logo-white.png"


const Footer = () => {
  return (
    <div className='grid grid-cols-1  md:grid-cols-2 mx-auto lg:grid-cols-4 md:px-6  pt-10 llg:max-w-[1400px]'>
        {/* First Div */}
      <div className=' flex flex-col justify-start items-start gap-3 px-6 mb-10 text-start'>
        <div className=' w-[200px] h-[150px]'>
            <img src={logo} className='w-full h-full object-contain drop-shadow-sm' alt="" />
        </div>
        <div className=' titleText font-bold text-[#ecebeb] text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sapiente!
        </div>
        <div>
            <div className=' titleText2 font-bold mb-2 text-[#ffffff]'>Customer Care Number</div>
            <div className=' flex justify-start items-center gap-2'>
               <a href="tel:+91 986756578" className=' flex justify-center items-center gap-2'>
                 {/* Icon */}
                 <div><FaPhoneAlt className='text-2xl text-[#ecebeb]'/></div>
                {/* Phone Nuumber */}
                <div className=' titleText2 text-[20px] text-[#ecebeb]'>+91 86754563547</div>
               </a>
            </div>
            <div className='flex justify-start mt-4 gap-3'>
                {/* Icons */}
                <div><FaFacebook className='text-3xl cursor-pointer text-[#ecebeb]'/></div>
                <div><MdEmail className='text-3xl cursor-pointer text-[#ecebeb]'/></div>
                <div><AiFillInstagram className='text-3xl cursor-pointer text-[#ecebeb]'/></div>
            </div>
        </div>
      </div>

      {/* Seconf Div */}
      <div className=' px-6 mb-10 text-start'>
        <div className='text-[26px] titleText2 mb-3 text-[#ffff]'>Explore</div>
        <div>
            <ul className=' flex flex-col gap-2 font-bold titleText text-[#ecebeb]'>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Branch</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>
        </div>
      </div>

      {/* Thrid Div Address1 */}
      <div className='px-6 mb-10 mx-auto flex flex-col justify-start items-start text-start'>
        <div className='mb-2 titleText2 text-[26px] text-[#ffff]'>Hyper City(Address 1)</div>
        <div className=' titleText font-bold mb-1 text-[#ecebeb]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, delectus!</div>
        <div className='titleText font-bold mb-3 text-[#ecebeb]'>Pin - 699087</div>
        <div className='flex items-center gap-3'>
            <div><FaPhoneAlt className='text-[#ecebeb]'/></div>
            <div className=' titleText2 text-[#ecebeb]'>+91 987655467987</div>
        </div>
        <div className=' flex items-center gap-3 mt-2'>
            <div><MdEmail className='text-[#ecebeb]'/></div>
            <div className='titleText2 text-[#ecebeb]'>info@vjhknkmk.com</div>
        </div>
      </div>

      {/* Fourth Div Address2 */}
      <div className='px-6 mb-10 mx-auto flex flex-col justify-start items-start text-start'>
        <div className='mb-2 titleText2 text-[26px] text-[#ffff]'>Hyper City(Address 2)</div>
        <div className=' titleText font-bold mb-1 text-[#ecebeb]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, delectus!</div>
        <div className='titleText font-bold mb-3 text-[#ecebeb]'>Pin - 699087</div>
        <div className='flex items-center gap-3'>
            <div><FaPhoneAlt className='text-[#ecebeb]'/></div>
            <div className=' titleText2 text-[#ecebeb]'>+91 987655467987</div>
        </div>
        <div className=' flex items-center gap-3 mt-2'>
            <div><MdEmail className='text-[#ecebeb]'/></div>
            <div className='titleText2 text-[#ecebeb]'>info@vjhknkmk.com</div>
        </div>
      </div>

    </div>
  )
}

export default Footer
