import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import offerPoster1 from "../assets/offer-poster1.jpg";
import offerPoster2 from "../assets/offer-poster2.jpg";
import offerPoster3 from "../assets/offer-poster3.jpg";
import offerPoster4 from "../assets/offer-poster4.jpg";
import { BiSolidPlusSquare } from "react-icons/bi";
import { FaFileImage } from "react-icons/fa";

const OfferPosters = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // This is the default for small screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Large screens (1200px and above)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // Tablet screens (1024px and above)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320, // Smaller screens (600px and above)
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const OfferPostersList = [
    offerPoster1, offerPoster2, offerPoster3, offerPoster4
  ];

  return (
    <div>
      <div className='mt-5'>
        <div className='mb-5 titleText2 text-center font-bold text-[44px] leading-tight text-[#b0b9b1] drop-shadow-sm md:text-center'>
          Today's Offer
        </div>
        <div className=' flex justify-center items-center gap-10 mb-10'>
            <div><button className=' px-8 py-2 bg-[#FF6C00] text-white font-bold rounded-lg flex  items-center gap-2'>Select <span><FaFileImage/></span></button>
            
            </div>
            <div><button className='px-8 py-2 bg-[#FF6C00] text-white font-bold rounded-lg flex items-center gap-2'>Upload <span><BiSolidPlusSquare/></span></button>
            </div>
        </div>
        <Slider {...settings} className='mx-auto'>
          {OfferPostersList.map((item, index) => (
            <div key={index} className='w-full h-[300px] rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:h-[400px]'>
              <img src={item} className='w-full h-full rounded-3xl object-cover' alt={`offer-poster-${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default OfferPosters;
