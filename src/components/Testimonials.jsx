import React from 'react'
import testimonial1 from "../assets/testimonial1.jpg"
import testimonial2 from "../assets/testimonial2.jpg"
import testimonial3 from "../assets/testimonial3.jpg"




const Testimonials = () => {
  return (
    <div className=' '>
        {/* Card Box */}
      <div className='  border-[1px] border-[#a00000]'>
        {/* Image Div - Left */}
        <div className=' mb-2'>
            <div className='testimonialCard mx-auto'>
                <img src={testimonial1} className='w-full h-full object-cover rounded-full' alt="" />
            </div>
        </div>
        {/* Content Div - Right */}
        <div>
            <div className=' text-center mb-2 italic px-8'>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quam, sit quisquam mollitia, doloremque totam praesentium temporibus placeat expedita modi dolores. Soluta blanditiis itaque necessitatibus ad veritatis saepe temporibus labore"
            </div>
            <div className='text-center font-bold'>Testimonial Member</div>
        </div>
      </div>

      <div className='  border-[1px] border-[#a00000]'>
        {/* Image Div - Left */}
        <div className=' mb-2'>
            <div className='testimonialCard mx-auto'>
                <img src={testimonial2} className='w-full h-full object-cover rounded-full' alt="" />
            </div>
        </div>
        {/* Content Div - Right */}
        <div>
            <div className=' text-center mb-2 italic px-8'>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quam, sit quisquam mollitia, doloremque totam praesentium temporibus placeat expedita modi dolores. Soluta blanditiis itaque necessitatibus ad veritatis saepe temporibus labore"
            </div>
            <div className='text-center font-bold'>Testimonial Member</div>
        </div>
      </div>

      <div className='  border-[1px] border-[#a00000]'>
        {/* Image Div - Left */}
        <div className=' mb-2'>
            <div className='testimonialCard mx-auto'>
                <img src={testimonial3} className='w-full h-full object-cover rounded-full' alt="" />
            </div>
        </div>
        {/* Content Div - Right */}
        <div>
            <div className=' text-center mb-2 italic px-8'>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quam, sit quisquam mollitia, doloremque totam praesentium temporibus placeat expedita modi dolores. Soluta blanditiis itaque necessitatibus ad veritatis saepe temporibus labore"
            </div>
            <div className='text-center font-bold'>Testimonial Member</div>
        </div>
      </div>

    </div>
  )
}

export default Testimonials
