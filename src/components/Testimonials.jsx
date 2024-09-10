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
        pauseOnHover: false,
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
                    "Shopping at Hypercity Hypermarket has always been a fantastic experience. Their wide range of products ensures I find everything I need in one place. The quality is consistently high, and the prices are unbeatable. The staff is always courteous and quick to assist. Hypercity has become my trusted destination for all my shopping needs."
                    </div>
                    <div className='text-center font-bold'>Girish Choudary</div>
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
                  "I've been a loyal Hypercity Hypermarket customer for years, and I'm always impressed by their quality and affordability. From groceries to household items, they offer top-notch products at great prices. The staff is friendly, and the service is exceptional. Hypercity is my go-to for all my household needs!"
                </div>
                <div className='text-center font-bold'>Saniya Jithesh</div>
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
                  "Hypercity Hypermarket never disappoints! The variety of products is impressive, and the store layout makes shopping convenient. I love that I can rely on the freshness of their groceries and the quality of every item. Plus, the frequent discounts make it a great value for money. Hypercity has definitely earned my loyalty!"
                </div>
                <div className='text-center font-bold'>Akash K V</div>
              </div>
            </div>
          </Slider>
        </div>
      );
    };
    

export default Testimonials
