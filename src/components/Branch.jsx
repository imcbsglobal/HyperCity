import React,{useEffect} from 'react'
import branch1 from "../assets/hypercity-branch.jpg"
import branch2 from "../assets/branch2.jpg"
import Footer from './Footer'
import mobileBg from "../assets/mobil-bg1.jpg"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

const Branch = () => {
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className=' relative'>
      <div className=' absolute w-full h-full left-0 top-0 right-0 bottom-0 -z-20'>
        <img src={mobileBg} className=' w-full h-full object-cover mix-blend-multiply' alt="" />
      </div>
      <section>
        <div className=' pt-24'>
          <div className=' lg:max-w-[1200px] lg:mx-auto mb-10 px-6 pt-5'>
            <div className='text-center titleText2 font-bold text-[44px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm'>Our Branches</div>
            <div className='text-center mb-10 paraText lg:px-56 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, qui aperiam voluptas veniam aspernatur ea deleniti repudiandae, enim deserunt, aliquam nihil quasi sunt eveniet? Id nam soluta dolore iste quibusdam.
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
                    <div className='font-bold flex justify-center items-center gap-2 md:justify-start'><span className='text-[#FF6C00]'><FaPhoneAlt/></span>Phone : +9197765768856</div>
                    <div className='font-bold flex items-center justify-center md:justify-start gap-2'><span className='text-[#FF6C00]'><MdEmail/></span>email : info@hypercity.com</div>
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
                  <div className='font-bold flex items-center justify-center gap-2 md:justify-end'><span className='text-[#FF6C00]'><FaPhoneAlt/></span>Phone : +9197765768856</div>
                  <div className='font-bold flex items-center gap-2 md:justify-end justify-center'><span className='text-[#FF6C00]'><MdEmail/></span>email : info@hypercity.com</div>
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
