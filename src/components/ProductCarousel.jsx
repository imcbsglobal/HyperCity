import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import carousel1 from "../assets/carousel1.jpeg";
import carousel2 from "../assets/carousel2.jpeg";
import carousel3 from "../assets/carousel3.jpeg";
import carousel4 from "../assets/11.jpg";


const ProductCarousel = () => {
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
    <div>
      
      {/* Carousel */}
      <section className=' overflow-hidden mx-auto'>
        <Slider {...settings} className=' mx-auto'>
          <div className='w-[90%] h-[200px] lg:h-[500px] dlg:h-[600px] mx-auto shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
            <img src={carousel1} className=' w-full h-full object-cover ' alt="" />
          </div>
          <div className='w-[90%] h-[200px]  lg:h-[500px] dlg:h-[600px] mx-auto shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
            <img src={carousel2} className='w-full h-full object-cover' alt="" />
          </div>
          <div className='w-[90%] h-[200px] lg:h-[500px] dlg:h-[600px] mx-auto shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
            <img src={carousel3} className='w-full h-full object-cover' alt="" />
          </div>
        </Slider>
      </section>
    </div>
  )
}

export default ProductCarousel
