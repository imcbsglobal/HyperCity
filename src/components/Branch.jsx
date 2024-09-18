import React,{useEffect, useState} from 'react'
import branch1 from "../assets/hypercity-branch.jpg"
import branch2 from "../assets/branch2.jpg"
import Footer from './Footer'
import mobileBg from "../assets/mobil-bg1.jpg"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import whatsapp from "../assets/whatsapp.png"
import messageBox from "../assets/message-box.png"
import chatBg from "../assets/chatting-bg.png"
import logo from "../assets/single-logo.png"
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";

const Branch = () => {
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const [openChat, setOPenChat] = useState(false)

  const handleOpenChatc = () => {
    setOPenChat(!openChat)
  }

  return (
    <div className=' relative'>
      <div className=' absolute w-full h-full left-0 top-0 right-0 bottom-0 -z-20'>
        <img src={mobileBg} className=' w-full h-full object-cover mix-blend-multiply' alt="" />
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
                  
              <a href="https://wa.me/qr/RONTMIZCOXJRI1">
                <button className='bg-[#01af10] px-8 py-1 text-[#fff] font-bold titleText2 rounded-3xl shadow-md flex justify-center items-center gap-2'><span className='text-xl'><FaWhatsapp/></span>Start Now</button>
              </a>
              </div>
          </div>

          </div>
      </div>
      )}

      <section>
        <div className=' pt-24'>
          <div className=' lg:max-w-[1200px] lg:mx-auto mb-10 px-6 pt-5'>
            <div className='text-center titleText2 font-bold text-[44px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm'>Our Branches</div>
            <div className='text-center mb-10 paraText lg:px-56 font-semibold'>With two thriving branches, We stands as a symbol of quality and affordability. Our flagship store marked the beginning of our journey to deliver exceptional service and value to our customers. As we continue to grow, our second branch extends the same trusted offerings, reinforcing our commitment to providing the best products at the most competitive prices across all locations.
            </div>
            {/* Branches */}
            <div className='grid grid-cols-1 md:flex  mb-10 md:gap-10 md:place-items-center'>
              {/* Box */}
              <div className=' w-full h-[300px] productBox mb-10 lg:mb-20'>
                <div className=' w-full h-[300px] md:h-[350px]'>
                  <img src={branch1} className='w-full h-full object-cover productBoxImg' alt="" />
                </div>
              </div>
              {/* Content */}
              <div className='md:w-[50%]'>
                <div>
                  <div className='titleText2 font-bold text-[32px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm text-center md:text-start'>Kamblakkad, Wayanad</div>
                  <div className='text-center md:text-start font-semibold flex items-start gap-2'>
                   <div>HYPERCITY Hypermarket
                    <span className='block'>Kamblakkad, Wayanad, Kerala</span> 
                    <span className='block'>Pin : 673122</span>
                  </div>
                  </div>
                </div>
                {/* Contact Details */}
                <div className=' mt-5'>
                  <div className=' text-center md:text-start'>
                    <div className='font-bold flex justify-center items-center gap-2 md:justify-start'><span className='text-[#FF6C00]'><FaPhoneAlt/></span>Phone : +91 9539336622</div>
                    <div className='font-bold flex items-center justify-center md:justify-start gap-2'><span className='text-[#FF6C00]'><MdEmail/></span>email : info@hypercityhypermarket.com</div>
                  </div>
                </div>

              </div>

            </div>

            <div className='grid grid-cols-1 place-items-center md:flex md:flex-row-reverse md:gap-10'>
              {/* Box */}
              <div className=' w-full h-[300px] productBox mb-10'>
                <div className=' w-full h-[300px] md:h-[350px]'>
                  <img src={branch1} className='productBoxImg w-full h-full object-cover' alt="" />
                </div>
              </div>
              {/* Content */}
              <div className='md:w-[50%]'>
                <div>
                  <div className='titleText2 font-bold text-[32px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm text-center md:text-end'>Manathavady, Wayanad</div>
                  <div className='text-center md:text-end font-semibold'>
                    HYPERCITY Hypermarket
                    <span className='block'>Payod, Manathavady, Wayanad, Kerala 
                    <span className='block'>Pin : 670645</span></span> 
                  </div>
                </div>
                 {/* Contact Details */}
                 <div className=' mt-5'>
                  <div className=' text-center md:text-end'>
                  <div className='font-bold flex items-center justify-center gap-2 md:justify-end'><span className='text-[#FF6C00]'><FaPhoneAlt/></span>Phone : +91 9539336622</div>
                  <div className='font-bold flex items-center gap-2 md:justify-end justify-center'><span className='text-[#FF6C00]'><MdEmail/></span>email : info@hypercityhypermarket.com</div>
                  </div>
                </div>
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

export default Branch
