import React, { useEffect, useState } from 'react';
import whatsapp from "../assets/whatsapp.png"
import messageBox from "../assets/message-box.png"
import chatBg from "../assets/chatting-bg.png"
import logo from "../assets/single-logo.png"
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import notFound from "../assets/not-found.mp4"


const Career = () => {
  const [openChat, setOPenChat] = useState(false)

  const handleOpenChatc = () => {
    setOPenChat(!openChat)
  }

  return (
    <div className='pt-36'>
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

    <section className=' mb-5'>
        <div className=' flex flex-col justify-center items-center  text-center'>
          <div className='titleText2 font-bold text-[44px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm md:text-center'>Career</div>
          <div className='px-6 md:px-10 lg:px-56 mb-5 llg:w-[800px] mx-auto llg:px-0'>We believe in fostering talent and creating a dynamic workplace that values growth, innovation, and collaboration. Explore the possibilities of joining our team and becoming part of a company committed to excellence in everything we do.</div>
        </div>
      </section>

      <section className='w-full h-full flex justify-center items-center'>
        {/* <div className='font-bold text-[#FF6C00]'></div> */}
        <div className=" grid place-items-center md:flex md:items-center md:gap-5 justify-center items-center">
              <video src={notFound} autoPlay loop muted playsInline className=" mix-blend-multiply w-[100px] h-[100px]" type="video/mp4"></video>
              <p className=" font-bold text-center text-[#FF6C00]">Currently, no vacancies available.</p>
            </div>
      </section>
    </div>
  )
}

export default Career
