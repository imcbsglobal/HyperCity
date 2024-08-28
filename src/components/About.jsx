import React from 'react'
import aboutImg from "../assets/about-img.jpg"
import Footer from './Footer'
import author1 from '../assets/author1.jpg'
import author2 from '../assets/author2.jpg'
import customer from "../assets/customer.png"
import Testimonials from './Testimonials'
import mobileBg from "../assets/mobil-bg1.jpg"


const About = () => {
  return (
    <div className='relative'>
      <div className=' absolute w-full h-full left-0 right-0 top-0 bottom-0 -z-30'>
        <img src={mobileBg} className=' w-full h-full object-cover opacity-55' alt="" />
      </div>
      <section className='pt-32'>
        <div className=''>
          <div className=' px-6 lg:w-[1200px] llg:w-[1400px] lg:mx-auto mt-2 mb-10 lg:flex lg:flex-row-reverse lg:gap-10'>
            {/* Left */}
            <div className='lg:w-[60%]'>
              <div className='titleText font-bold mb-2 text-[#FF6C00]'>About Us</div>
              <div className='titleText2 font-bold text-[36px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm'>From Market Expertise to the <span className='lg:block'>Success of Hypercity </span>
              </div>
              <div className=' mb-5'>Noufal KK began his entrepreneurial journey over 20 years ago with Naas Agencies, a wholesale sugar dealership serving both Wayanad and Kannur districts. This business laid the foundation for his deep market knowledge and expertise, which he later channelled into the grocery retail industry.
              </div>
              <div className=' mb-7'>
              Together with his brothers, Noufal expanded into the grocery business in Kannur district, marking the start of their successful retail journey. With 20 years of experience in the grocery field, Noufal KK launched his first supermarket, Hypercity Hypermarket, in Kamblakkad, Wayanad, Kerala, on 2nd May 2019. The grand opening was inaugurated by Panakkad Sayyid Basheer Ali Shihad Thangal, and it quickly became a trusted name among customers.
              <br /><br />
              Our success is built on a foundation of trust, extensive knowledge, and a passion for delivering exceptional customer experiences. These values are the driving force behind everything we do.
              <br /> <br />

              Building on the success of Naas Agencies and Hypercity Hypermarket, we are now thrilled to announce our most ambitious project yet—a 30,000 square feet Hypercity Hypermarket in Payod, Mananthavady, Wayanad, Kerala. This upcoming hypermarket is set to become one of the leading retail destinations in Wayanad district, offering an unparalleled shopping experience.
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
                <img src={author1} className='w-full h-full object-cover rounded-full' alt="" />
              </div>
              {/* Excecutive Quote */}
              <div className='md:w-[70%]'>
                  <div className=' paraText text-sm italic text-center md:text-start px-16 md:px-0 mb-3'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus error aspernatur aliquid ipsa nisi reiciendis obcaecati optio repudiandae incidunt non consectetur impedit, in sed ipsum. Consequuntur esse necessitatibus odio accusamus"
                  </div>
                  <div className=' text-center md:text-start font-bold titleText'>Excecutive Name - Managing Director</div>
              </div>
            </div>

            {/* Excecutive List 2 */}
            <div className='grid grid-cols-1 place-items-center mb-10 md:flex md:justify-center md:items-center md:gap-10 md:flex-row-reverse'>
              {/* Excecutive Photo */}
              <div className=' w-[150px] h-[150px] rounded-full bg-[#8f6666] mb-3'>
              <img src={author2} className='w-full h-full object-cover rounded-full' alt="" />
              </div>
              {/* Excecutive Quote */}
              <div className='md:w-[70%]'>
                  <div className=' paraText text-sm italic text-center px-16 mb-3 md:px-0 md:text-end'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus error aspernatur aliquid ipsa nisi reiciendis obcaecati optio repudiandae incidunt non consectetur impedit, in sed ipsum. Consequuntur esse necessitatibus odio accusamus"
                  </div>
                  <div className=' text-center font-bold titleText md:text-end'>Excecutive Name - Managing Director</div>
              </div>
            </div>
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
