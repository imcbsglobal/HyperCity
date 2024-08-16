import React from 'react'
import Footer from './Footer'

const Gallery = () => {
  return (
    <div>
      <section>
        <div className='pt-20 mb-10'>
          <div className=' lg:mx-auto dlg:max-w-[1500px] px-6 pt-5'>
            <div className='titleText2 font-bold text-[44px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm text-center'>Our Gallery</div>
            <div className='text-center paraText lg:px-56'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit, consectetur officia ut, sed deleniti perspiciatis sit delectus repudiandae alias reprehenderit dolorum architecto veritatis! Quisquam debitis non accusantium vero impedit.
            </div>

            {/* Gallery Images */}
            <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10'>

              <div className=' w-full h-[300px] productBox'>
                
              </div>
              <div className=' w-full h-[300px] productBox'>
                
              </div>
              <div className=' w-full h-[300px] productBox'>
                
              </div>
              <div className=' w-full h-[300px] productBox'>
                
              </div>
              <div className=' w-full h-[300px] productBox'>
                
              </div>
              <div className=' w-full h-[300px] productBox'>
                
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
