import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import offerPoster1 from "../assets/offer-poster1.jpg"
import offerPoster2 from "../assets/offer-poster2.jpg"
import offerPoster3 from "../assets/offer-poster3.jpg"
import offerPoster4 from "../assets/offer-poster4.jpg"

const OfferPosters = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
      };

      const OfferPostersList = [
        offerPoster1,offerPoster2,offerPoster3,offerPoster4
      ]
  return (
    <div>
      <div className=' mt-5'>
        <div className='mb-5 titleText2 text-center font-bold text-[44px] leading-tight text-[#b0b9b1] drop-shadow-sm md:text-center'>
            Today's Offer
        </div>
        <Slider {...settings} className=' mx-auto'>
            {OfferPostersList.map((item)=>(
                <div className=' w-full h-[300px] rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <img src={item} className=' w-full h-full rounded-3xl object-cover' alt="" />
                </div>
            ))}
            
        </Slider>
      </div>
    </div>
  )
}

export default OfferPosters
