import React,{useEffect , useState} from 'react'
import aboutImg from "../assets/about-img.jpg"
import Footer from './Footer'
import author1 from '../assets/author1.jpg'
import author2 from '../assets/author2.jpg'
import customer from "../assets/customer.png"
import Testimonials from './Testimonials'
import mobileBg from "../assets/mobil-bg1.jpg"
import whatsapp from "../assets/whatsapp.png"
import messageBox from "../assets/message-box.png"
import chatBg from "../assets/chatting-bg.png"
import logo from "../assets/single-logo.png"
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";


const About = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const [openChat, setOPenChat] = useState(false)

  const handleOpenChatc = () => {
    setOPenChat(!openChat)
  }

  return (
    <div className='relative'>
      <div className=' absolute w-full h-full left-0 right-0 top-0 bottom-0 -z-30'>
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
                  
              <a href="https://wa.me/qr/RONTMIZCOXJRI1">
                <button className='bg-[#01af10] px-8 py-1 text-[#fff] font-bold titleText2 rounded-3xl shadow-md flex justify-center items-center gap-2'><span className='text-xl'><FaWhatsapp/></span>Start Now</button>
              </a>
              </div>
          </div>

          </div>
      </div>
      )}

      <section className='pt-32'>
        <div className=''>
          <div className=' px-6 lg:w-[1200px] llg:w-[1400px] lg:mx-auto mt-2 mb-10 lg:flex lg:flex-row-reverse lg:gap-10'>
            {/* Left */}
            <div className='lg:w-[60%]'>
              <div className='titleText font-bold mb-2 text-[#FF6C00]'>About Us</div>
              <div className='titleText2 font-bold text-[36px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm'>From Market Expertise to the <span className='lg:block'>Success of Hypercity </span>
              </div>
              <div className=' mb-5'>The Hypercity Hypermarket was established on 2nd May 2019 in Kamblakkad, Wayanad, Kerala. We are committed to providing maximum quality products at minimum prices, drawing on over 25 years of experience in the grocery industry. Noufal KK, having channeled his deep market knowledge and expertise from his previous venture, Naas Agencies, a wholesale sugar dealership serving Malabar areas in Kerala, expanded into the grocery retail sector. Together with his brothers, Noufal began their successful retail journey in the Kannur district. The grand opening of the first Hypercity Hypermarket was inaugurated by Panakkad Sayyid Basheer Ali Shihad Thangal, and it quickly became a trusted name among customers.
              </div>
              <div className=' mb-7'>
              Our success is built on a foundation of trust, extensive knowledge, and a passion for delivering exceptional customer experiences. These values are the driving force behind everything we do.
              <br /><br />
              {/* Our success is built on a foundation of trust, extensive knowledge, and a passion for delivering exceptional customer experiences. These values are the driving force behind everything we do.
              <br /> <br /> */}

              Building on the success of Naas Agencies and Hypercity Hypermarket, we are now thrilled to announce our most ambitious project yet—a 32,000 square feet Hypercity Hypermarket in Payod, Mananthavady, Wayanad. This upcoming hypermarket is set to become one of the leading retail destinations in the district, offering an unparalleled shopping experience.
              </div>
            </div>
            {/* Right */}
            <div className=' flex justify-center items-center'>
              <div className='aboutImg w-[300px] h-[300px] lg:h-[500px] lg:w-[500px] rounded-full'>
                <img src={aboutImg} className=' w-full h-full object-cover rounded-full BlobDesign' alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='bg-[#c3b6b622]'>
          <div className='lg:max-w-[1200px] lg:mx-auto px-6 py-10'>
            {/* Excecutive List 1 */}
            <div className='grid grid-cols-1 place-items-center mb-10 md:flex md:justify-center md:items-center md:gap-10'>
              {/* Excecutive Photo */}
              <div className=' w-[150px] h-[150px] rounded-full bg-[#8f6666] mb-3'>
                <img src="" className='w-full h-full object-cover rounded-full' alt="" />
              </div>
              {/* Excecutive Quote */}
              <div className='md:w-[70%]'>
                  <div className=' paraText text-sm italic text-center md:text-start px-16 md:px-0 mb-3'>"With a foundation built on trust and expertise, we deliver a value and service proposition to our customers that few can match. Our vision for Hypercity Hypermarket is to become the destination for quality within affordability."
                  </div>
                  <div className=' text-center md:text-start font-bold titleText'>Noufal KK - Founder</div>
              </div>
            </div>

            {/* Excecutive List 2 */}
            {/* <div className='grid grid-cols-1 place-items-center mb-10 md:flex md:justify-center md:items-center md:gap-10 md:flex-row-reverse'> */}
              {/* Excecutive Photo */}
              {/* <div className=' w-[150px] h-[150px] rounded-full bg-[#8f6666] mb-3'>
              <img src={author2} className='w-full h-full object-cover rounded-full' alt="" />
              </div> */}
              {/* Excecutive Quote */}
              {/* <div className='md:w-[70%]'>
                  <div className=' paraText text-sm italic text-center px-16 mb-3 md:px-0 md:text-end'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus error aspernatur aliquid ipsa nisi reiciendis obcaecati optio repudiandae incidunt non consectetur impedit, in sed ipsum. Consequuntur esse necessitatibus odio accusamus"
                  </div>
                  <div className=' text-center font-bold titleText md:text-end'>Excecutive Name - Managing Director</div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </section>

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

export default About
