import React from 'react'
import offerPoster1 from "../assets/offer-poster1.jpg"
import offerPoster2 from "../assets/offer-poster2.jpg"
import offerPoster3 from "../assets/offer-poster3.jpg"
import offerPoster4 from "../assets/offer-poster4.jpg"
import { FaArrowRightLong } from "react-icons/fa6";

const OfferSection = () => {
  return (
    <div>
      <section>
        <div className='mb-10'>
            <div className='px-2'>
                <div className=' titleText2 text-center font-bold text-[36px] mb-5 leading-tight text-[#fff] md:text-white drop-shadow-sm'>Offer Section</div>
                {/* Offer Image-Cards */}
                <div className=' grid grid-cols-2 w-full gap-2 lg:grid-cols-4 lg:mx-auto llg:gap-10 offerSectionsWidth'>
                    <div className='w-full h-[300px] lg:h-[500px] rounded-lg '>
                        <img src={offerPoster1} className='w-full h-full object-cover rounded-lg transition-all duration-300 ease-linear mix-blend-multiply hover:mix-blend-normal' alt="" />
                    </div>
                    <div className='w-full h-[300px] lg:h-[500px] rounded-lg '>
                        <img src={offerPoster2} className='w-full h-full object-cover transition-all duration-300 ease-linear rounded-lg mix-blend-multiply' alt="" />
                    </div>
                    <div className='w-full h-[300px] lg:h-[500px] rounded-lg '>
                        <img src={offerPoster4} className='w-full h-full object-cover transition-all duration-300 ease-linear rounded-lg mix-blend-multiply' alt="" />
                    </div>
                    <div className="w-full h-[300px] lg:h-[500px] rounded-lg ">
                      <img
                        src={offerPoster3}
                        className="w-full h-full object-cover rounded-lg transition-all duration-300 ease-linear mix-blend-multiply hover:mix-blend-normal"
                        alt=""
                      />
                    </div>
                </div>
                <div className='mt-10 flex justify-center relative z-10'>
                    <button className='px-8 py-3 rounded-3xl bg-[#FF6C00] font-bold titleText2 text-[#fff] shadow-xl flex gap-2 items-center'>View More <span><FaArrowRightLong/></span></button>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default OfferSection
