import React from 'react'
import testimonial1 from "../assets/testimonial1.jpg"
import testimonial2 from "../assets/testimonial2.jpg"
import testimonial3 from "../assets/testimonial3.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";





const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
      };
    
      return (
        <div className='max-w-[1200px] mx-auto'>
          <Slider {...settings} className=''>
            <div className=' flex'>
              
                <div className='testimonialCard mx-auto'>
                    <img src={testimonial1} className='w-full h-full object-cover rounded-full' alt="" />
                </div>
                
                <div> 
                    <div className='text-center mb-2 italic px-8 lg:px-32 llg:px-56'>
                    "I recently visited Hypercity and was thoroughly impressed with the overall shopping experience. The store layout is spacious and well-organized, making it incredibly easy to find everything I needed. The shelves were neatly stocked, and I found a great selection of fresh fruits and vegetables, along with variety of grocery items.
                    "
                    </div>
                    <div className='text-center font-bold text-lg'>Shahina Aneesh <span className='block text-[#FF6C00] text-sm'>Lecturer</span><span className='block text-[#878282] text-sm'>(Oriental college lakkidi)</span></div>
                </div>

            </div>
    
            <div className=''>
              <div className='mb-2'>
                <div className='testimonialCard mx-auto'>
                  <img src={testimonial2} className='w-full h-full object-cover rounded-full' alt="" />
                </div>
              </div>
              <div>
                <div className='text-center mb-2 italic px-8 lg:px-32 llg:px-56'>
                  "Hypercity Supermarket provides a great shopping experience with a wide variety of quality products. The store is well-organized and clean, making it easy to navigate. Fresh produce, dairy, and meat are consistently of high quality.Customer service is friendly and helpful, ensuring a pleasant visit. Prices are reasonable, with regular promotions that offer good value.
                  "
                </div>
                <div className='text-center font-bold text-lg'> Shabna manaf
                <span className='block text-[#FF6C00] text-sm'>Govt Staff Nurse</span>
                <span className='block text-[#878282] text-sm'>(Kalpetta)</span></div>
              </div>
            </div>
    
            <div className=''>
              <div className='mb-2'>
                <div className='testimonialCard mx-auto'>
                  <img src={testimonial3} className='w-full h-full object-cover rounded-full' alt="" />
                </div>
              </div>
              <div>
                <div className='text-center mb-2 italic px-8 lg:px-32 llg:px-56'>
                  "Hypercity Hypermarket never disappoints! With a great product variety, fresh groceries, and frequent discounts, it's a reliable and convenient place to shop. They've earned my loyalty!"
                </div>
                <div className='text-center font-bold'>Akash K V</div>
              </div>
            </div>
          </Slider>
        </div>
      );
    };
    

export default Testimonials
