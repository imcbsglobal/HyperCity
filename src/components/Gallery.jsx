import React from 'react'

const Gallery = () => {
  return (
    <div>
      <section>
        <div>
          <div className='lg:max-w-[1200px] lg:mx-auto px-6 pt-5'>
            <div className='titleText2 font-bold text-[44px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm text-center'>Our Gallery</div>
            <div className='text-center paraText'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit, consectetur officia ut, sed deleniti perspiciatis sit delectus repudiandae alias reprehenderit dolorum architecto veritatis! Quisquam debitis non accusantium vero impedit.
            </div>

            {/* Gallery Images */}
            <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 mt-10'>

              <div className=' w-full h-[300px] productBox'>
                
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
