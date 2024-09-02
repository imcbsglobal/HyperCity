import React,{useEffect} from 'react'
import Footer from './Footer'
import Testimonials from './Testimonials'
import { BiSolidPlusSquare } from "react-icons/bi";
import { FaFileImage } from "react-icons/fa";

import customer from "../assets/customer.png"
import mobileBg from "../assets/mobil-bg1.jpg"
import ProductCarousel from './ProductCarousel';
import Category from './Category';
import OfferPosters from './OfferPosters';
import { Outlet } from 'react-router-dom';
import Footwear from "../components/categoryList/Footwear";




const Products = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className=' relative'>
      <div className=' absolute right-0 left-0 top-0 bottom-0 w-full h-full -z-30'>
        <img src={mobileBg} className=' w-full h-full object-cover opacity-55' alt="" />
      </div>

      {/* Carousel */}
      <div className=' pt-24'>
        <ProductCarousel className=""/>
      </div>

      <section>
        <div className='pt-10 mb-10 overflow-hidden'>
            <div className=' pt-2  lg:mx-auto dlg:max-w-[1500px]'>
                <div className='titleText2 font-bold text-[36px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm text-center px-6'>Our Products</div>
                <div className='paraText text-center lg:px-56 px-6 mb-5 lg:mb-10'>Discover a wide array of high-quality items at our store, from fresh produce to a variety of essential groceries and more. Each selection is carefully chosen to ensure exceptional quality and reflect our commitment to delivering outstanding customer satisfaction. Built on years of market expertise and trust, our offerings are designed to provide you with convenience and excellence in every purchase. Explore our collection and enjoy a superior shopping experience.
                </div> 


              {/* Offer Posters */}

              <section>
                <OfferPosters/>
              </section>


                {/* Category List */}

                <section className='px-6 mb-10'>
                  <Category/>
                </section>

                 {/* Outlet for selected category */}
                <section className='px-6'>
                  <Outlet />
                </section>
               
            </div>
        </div>
      </section>


      {/* <Slider {...settings} className='mx-auto'>
          {OfferPostersList.map((item, index) => (
            <div key={index} className='w-full h-[300px] rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:h-[400px]'>
              <img src={item} className='w-full h-full rounded-3xl object-cover' alt={`offer-poster-${index + 1}`} />
            </div>
          ))}
        </Slider> */}

      {/* Testimonials */}
      <section className=' mb-16 overflow-hidden'>
        <div className=' px-6 text-center mb-10 md:flex md:justify-center md:gap-5 md:items-center llg:w-[1400px] mx-auto'>
          <div className='md:w-[50%] lg:w-[40%] mb-5 lg:mb-0'>
            <img src={customer} className=' boxShadow' alt="" />
          </div>
          <div className='md:w-[50%] lg:w-[60%]'>
            <div className='text-[42px] mb-5 titleText2 leading-tight text-[#0cd50f]'>Our Customers Love</div>
            <div className='paraText mb-5 lg:px-20'>Our customers love the exceptional quality and variety we offer in every aspect of our store. From the freshness of our produce to the reliability of our groceries and the thoughtful selection of our other products, we consistently exceed expectations. Our dedication to providing a superior shopping experience, coupled with our years of market expertise, ensures that each visit is met with satisfaction and trust. Discover why our customers keep coming back for more.
            </div>
            <Testimonials className="mt-5"/>
          </div>
        </div>
        
      </section>

      <section className='bg-[#FF6C00]'>
        <Footer/>
      </section>
    </div>
  )
}

export default Products
