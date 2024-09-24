import React,{useEffect, useState} from 'react'
import MartBg from "../assets/mart-bg.jpeg"
import blackShade from "../assets/black-shade.png"
import Footer from './Footer'
import whatsapp from "../assets/whatsapp.png"
import messageBox from "../assets/message-box.png"
import chatBg from "../assets/chatting-bg.png"
import logo from "../assets/single-logo.png"
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const [openChat, setOPenChat] = useState(false)

  const handleOpenChatc = () => {
    setOPenChat(!openChat)
  }

  // Email 
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e14858fc-c1c0-4f97-959d-9fb7f6846477");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Form submitted successfully!", {
        position: "top-left"
    });
    } else {
      toast.error("Failed to submit the form. Please try again.", {
          position: "top-left"
      });
    }
  };


  return (
    <div>
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
        <div className='flex justify-center items-center relative pt-28'>
            <div className=' absolute top-0 left-0 right-0 bottom-0 -z-20'>
                <img src={MartBg} className=' w-full h-full object-cover md:opacity-80 md:blur-[2px] blur-[3px]' alt="" />
            </div>
            <div className=' absolute top-0 left-0 right-0 bottom-0 -z-10'>
                <img src={blackShade} className=' w-full h-full object-cover' alt="" />
            </div>
            <div className='md:flex justify-center items-center w-full px-6 lg:max-w-[1200px] lg:mx-auto py-10 md:gap-10'>
                <div className='w-full mb-10'>
                    <div className='text-center mb-5 text-[42px] titleText2 leading-tight text-[#ffffff]'>Get In Touch</div>
                    <form action="" onSubmit={onSubmit} className=' flex flex-col justify-center items-center gap-5 w-full'>
                        <input type="text" placeholder='Name' name="name" required className=' w-full py-3 outline-none border-none rounded-lg InputStyle px-5 bg-[#FF6C00]'/>
                        <input type="email" placeholder='Email' name="email" className='w-full py-3 outline-none border-none rounded-lg InputStyle px-5 bg-[#FF6C00]' />
                        <input type="number" placeholder='Phone Number' required className='w-full py-3 outline-none border-none rounded-lg InputStyle px-5 bg-[#FF6C00]' />
                        <textarea  placeholder='Message' name="message" className=' resize-none w-full py-3 outline-none border-none rounded-lg InputStyle px-5 bg-[#FF6C00]' id="" required></textarea>
                        <div>
                            <button type="submit" className='px-8 py-2 rounded-3xl bg-[#fff] font-bold text-[#FF6C00] shadow-lg'>Submit</button>
                        </div>
                    </form>
                    <ToastContainer className='mt-5'/>
                </div>
                {/* Address */}
                <div className='flex flex-col gap-5 lg:w-[50%]'>
                    <div>
                        <div className='mb-2 text-[32px] titleText2 leading-tight text-[#0cd50f]'>Our Address</div>
                        <div className=' mb-5 text-[18px] titleText leading-tight font-bold text-[#fff]'>Hyper City Retail India Pvt Ltd,</div>
                        
                        <div className='titleText text-sm text-[#fff] font-light flex flex-col justify-start items-start'>
                          <div className='mb-2 font-bold'>
                              Kamblakkad, Wayanad, Kerala ,
                          </div>
                          <div className=' font-bold mb-2'>
                              Manathavady, Wayanad, Kerala
                          </div>
                          <div className=' font-bold'>
                              Kadavathur, Kannur, Kerala
                          </div>
                        </div>
                    </div>
                    <div>
                        <div className='mb-2 text-[32px] titleText2 leading-tight text-[#0cd50f]'>Email</div>
                        <div className='text-[18px] titleText leading-tight text-[#fff] font-bold'>info@hypercityhypermarket.com</div>
                    </div>
                    <div>
                        <div className='mb-2 text-[32px] titleText2 leading-tight text-[#0cd50f]'>Phone</div>
                        <div className='mb-2 text-[18px] titleText leading-tight text-[#fff] font-bold'>+91 7034173173</div>
                        <div className='mb-5 text-[18px] titleText leading-tight text-[#fff] font-bold'>+91 9539336622</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section>
        <div className='flex justify-center items-center'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.2599629127967!2d76.072938474388!3d11.675979588532787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6759e8c049eb3%3A0x1cce462d7fc5e023!2sHypercity%20Supermarket!5e0!3m2!1sen!2sin!4v1723463596676!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-[500px]'></iframe>
        </div>
      </section>

      <section className='bg-[#FF6C00]'>
        <Footer/>
      </section>
    </div>
  )
}

export default Contact
