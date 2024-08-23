import React from 'react'
import product5 from "../../assets/product5.png"
import { BiSolidPlusSquare } from "react-icons/bi";
import { FaFileImage } from "react-icons/fa";

const Fruits = () => {
  return (
    <div>
      <section className='mt-10 mb-10'>
        <div className=' flex justify-center items-center gap-10'>
            <div><button className=' px-8 py-2 bg-[#FF6C00] text-white font-bold rounded-lg flex  items-center gap-2'>Select <span><FaFileImage/></span></button>
            
            </div>
            <div><button className='px-8 py-2 bg-[#FF6C00] text-white font-bold rounded-lg flex items-center gap-2'>Upload <span><BiSolidPlusSquare/></span></button>
            </div>
        </div>  
     </section>

     <section>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 llg:grid-cols-4 place-items-center dlg:max-w-[1440px]'>
        <div className=' w-full h-[300px] productBox pb-2'>
          <div className='w-auto h-[200px]'>
              <img src={product5} className='h-full w-full object-contain drop-shadow-2xl' alt="" />
          </div>
          <div className=' flex flex-col justify-center items-center titleText2'>
            <div className='text-xl text-[#FF6C00] drop-shadow-sm'>Spicy Lays Chips</div>
            <div className='text-sm titleText mt-1'>Lorem ipsum dolor sit amet.</div>
            </div>
            <div className='flex justify-center items-center '>
              <button className='px-8 py-1 mt-1 rounded-3xl bg-[#ff2020] font-bold text-[#fff] drop-shadow-md'>Delete</button>
            </div>
          </div>
      </div>
     </section>
    </div>
  )
}

export default Fruits
