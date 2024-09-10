import React,{useEffect, useState} from 'react'
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
import whatsapp from "../assets/whatsapp.png"
import messageBox from "../assets/message-box.png"
import chatBg from "../assets/chatting-bg.png"
import logo from "../assets/single-logo.png"
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";




const Products = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const [openChat, setOPenChat] = useState(false)

  const handleOpenChatc = () => {
    setOPenChat(!openChat)
  }

  return (
    <div className=' relative'>
      <div className=' absolute right-0 left-0 top-0 bottom-0 w-full h-full -z-30'>
        <img src={mobileBg} className=' w-full h-full object-cover opacity-55' alt="" />
      </div>

      {/* Whatsapp */}
      <div className='fixed z-[100] bottom-5 right-2'>
                <img src={whatsapp} onClick={handleOpenChatc} className='w-auto h-[70px] object-contain  drop-shadow-2xl cursor-pointer' alt="" />
      </div>
      
      {openChat && (
          <div className=' overflow-hidden'>
          <div className='fixed w-[300px] h-[300px] bg-[#fff] z-[100] rounded-3xl right-2 bottom-28 overflow-hidden chatBox'>
              <div className=' flex justify-center items-center gap-10 px-2 py-2 bg-[#095E54] rounded-t-3xl'>
                  <div>
                      <img src={logo} alt="" className='w-auto h-[50px] object-contain drop-shadow-2xl bg-white rounded-full p-1 WhatsappDp' />
                  </div>
                  <div>
                      <div className='text-xl titleText2 text-[#fff]'>
                          Hyper City
                      </div>
                      <div className=' text-[10px] text-[#aa9c9c]'>Typically replies within an hour</div>
                  </div>
                  <div>
                      <IoClose onClick={() => setOPenChat(!openChat)} className=' text-[#aa9c9c] cursor-pointer'/>
                  </div>
              </div>

          <div className='relative'>
              <img src={chatBg} alt="" />
              <div className=' absolute top-0 drop-shadow-md left-0 h-[190px] w-[68%]'>
                  <img src={messageBox} className='w-full h-full object-contain' alt="" />
                  <div className=' absolute top-12 font-bold titleText text-[#999393] pl-10 drop-shadow-sm'>
                      <div className=' text-[13px]'>Hyper city</div>
                      <div className=' flex items-center gap-3 text-[#554f4f]'>Hi there <span><MdWavingHand className='text-[#ffb909] drop-shadow-md'/></span></div>
                      <div className=' text-[#554f4f] text-[15px] leading-tight mt-2'>How can I help you?</div>
                  </div>
              </div>
          </div>

          <div className=' absolute bottom-0 w-full h-[60px] bg-[#fff]'>
              <div className=' flex justify-center mt-3'>
                  
                  <button className='bg-[#01af10] px-8 py-1 text-[#fff] font-bold titleText2 rounded-3xl shadow-md flex justify-center items-center gap-2'><span className='text-xl'><FaWhatsapp/></span>Start Now</button>
              </div>
          </div>

          </div>
      </div>
      )}

      {/* Carousel */}
      <div className=' pt-24 mb-5 llg:mb-10'>
        <ProductCarousel className=""/>
      </div>

      {/* Offer Posters */}

      <section>
        <div></div>
        <OfferPosters/>
      </section>

      <section>
        <div className='pt-10 mb-10 '>
            <div className=' pt-2  lg:mx-auto dlg:max-w-[1500px]'>
                <div className='titleText2 font-bold text-[36px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm text-center px-6'>Our Products</div>
                <div className='paraText text-center lg:px-56 px-6 mb-5 lg:mb-10'>Discover a wide array of high-quality items at our store, from fresh produce to a variety of essential groceries and more. Each selection is carefully chosen to ensure exceptional quality and reflect our commitment to delivering outstanding customer satisfaction. Built on years of market expertise and trust, our offerings are designed to provide you with convenience and excellence in every purchase. Explore our collection and enjoy a superior shopping experience.
                </div> 

                {/* Category List */}

                <section className=' mb-10'>
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
      {/* <section className=' mb-16 overflow-hidden'>
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
        
      </section> */}

      <section className='bg-[#FF6C00]'>
        <Footer/>
      </section>
    </div>
  )
}

export default Products
