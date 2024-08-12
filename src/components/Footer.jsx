import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../assets/logo.png"


const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:mx-auto lg:grid-cols-4 md:px-6 lg:max-w-[1200px] md:mt-10'>
        {/* First Div */}
      <div className=' flex flex-col gap-3 px-6 mb-10'>
        <div className=' w-[200px] h-[150px]'>
            <img src={logo} className='w-full h-full object-contain' alt="" />
        </div>
        <div className=' titleText font-bold text-[#918e8e]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sapiente!
        </div>
        <div>
            <div className=' titleText font-semibold mb-2 text-[#918e8e]'>Customer Care Number</div>
            <div className=' flex justify-start items-center gap-2'>
               <a href="tel:+91 986756578" className=' flex justify-center items-center gap-2'>
                 {/* Icon */}
                 <div><FaPhoneAlt className='text-2xl text-[#00a516]'/></div>
                {/* Phone Nuumber */}
                <div className=' titleText2 text-[20px] text-[#ff9d00]'>+91 86754563547</div>
               </a>
            </div>
            <div className='flex justify-start mt-4 gap-3'>
                {/* Icons */}
                <div><FaFacebook className='text-3xl cursor-pointer text-[#00a516]'/></div>
                <div><MdEmail className='text-3xl cursor-pointer text-[#00a516]'/></div>
                <div><AiFillInstagram className='text-3xl cursor-pointer text-[#00a516]'/></div>
            </div>
        </div>
      </div>

      {/* Seconf Div */}
      <div className=' px-6 mb-10'>
        <div className='text-[26px] titleText2 mb-3 text-[#ff9d00]'>Explore</div>
        <div>
            <ul className=' flex flex-col gap-2 font-bold titleText text-[#00a516]'>
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
      <div className='px-6 mb-10'>
        <div className='mb-2 titleText2 text-[26px] text-[#ff9d00]'>Hyper City(Address 1)</div>
        <div className=' titleText font-bold mb-1 text-[#918e8e]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, delectus!</div>
        <div className='titleText font-bold mb-3 text-[#918e8e]'>Pin - 699087</div>
        <div className='flex items-center gap-3'>
            <div><FaPhoneAlt className='text-[#00a516]'/></div>
            <div className=' titleText2 text-[#ff9d00]'>+91 987655467987</div>
        </div>
        <div className=' flex items-center gap-3 mt-2'>
            <div><MdEmail className='text-[#00a516]'/></div>
            <div className='titleText2 text-[#ff9d00]'>info@vjhknkmk.com</div>
        </div>
      </div>

      {/* Fourth Div Address2 */}
      <div className='px-6 mb-10'>
        <div className='mb-2 titleText2 text-[26px] text-[#ff9d00]'>Hyper City(Address 2)</div>
        <div className=' titleText font-bold mb-1 text-[#918e8e]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, delectus!</div>
        <div className='titleText font-bold mb-3 text-[#918e8e]'>Pin - 699087</div>
        <div className='flex items-center gap-3'>
            <div><FaPhoneAlt className='text-[#00a516]'/></div>
            <div className=' titleText2 text-[#ff9d00]'>+91 987655467987</div>
        </div>
        <div className=' flex items-center gap-3 mt-2'>
            <div><MdEmail className='text-[#00a516]'/></div>
            <div className='titleText2 text-[#ff9d00]'>info@vjhknkmk.com</div>
        </div>
      </div>

    </div>
  )
}

export default Footer
