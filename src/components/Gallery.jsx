import React from 'react'
import Footer from './Footer'
import galler1 from "../assets/gallery1.jpg"
import galler2 from "../assets/gallery2.jpg"
import galler3 from "../assets/gallery3.jpg"
import galler4 from "../assets/gallery4.jpg"
import galler5 from "../assets/gallery5.jpg"
import galler6 from "../assets/gallery6.jpg"
import mobileBg from "../assets/mobil-bg1.jpg"


const Gallery = () => {
  return (
    <div className=' relative'>
      <div className=' absolute right-0 left-0 top-0 bottom-0 w-full h-full -z-30'>
        <img src={mobileBg} className=' w-full h-full object-cover opacity-80' alt="" />
      </div>
      <section>
        <div className='pt-24 mb-10'>
          <div className=' lg:mx-auto dlg:max-w-[1500px] px-6 pt-5'>
            <div className='titleText2 font-bold text-[44px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm text-center'>Our Gallery</div>
            <div className='text-center paraText lg:px-56'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit, consectetur officia ut, sed deleniti perspiciatis sit delectus repudiandae alias reprehenderit dolorum architecto veritatis! Quisquam debitis non accusantium vero impedit.
            </div>

            {/* Gallery Images */}
            <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10'>

              <div className=' w-full h-[300px] rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <img src={galler1} className=' w-full h-full object-cover rounded-3xl' alt="" />
              </div>
              <div className=' w-full h-[300px] rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <img src={galler2} className=' w-full h-full object-cover rounded-3xl' alt="" />
              </div>
              <div className=' w-full h-[300px] rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <img src={galler3} className=' w-full h-full object-cover rounded-3xl' alt="" />
              </div>
              <div className=' w-full h-[300px] rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <img src={galler4} className=' w-full h-full object-cover rounded-3xl' alt="" />
              </div>
              <div className=' w-full h-[300px] rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <img src={galler5} className=' w-full h-full object-cover rounded-3xl' alt="" />
              </div>
              <div className=' w-full h-[300px] rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <img src={galler6} className=' w-full h-full object-cover rounded-3xl' alt="" />
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className='bg-[#FF6C00]'>
        <Footer/>
      </section>
    </div>
  )
}

export default Gallery
