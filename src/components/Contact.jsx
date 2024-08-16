import React from 'react'
import MartBg from "../assets/mart-bg.jpeg"
import blackShade from "../assets/black-shade.png"
import Footer from './Footer'


const Contact = () => {
  return (
    <div>
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
                    <form action="" className=' flex flex-col justify-center items-center gap-5 w-full'>
                        <input type="text" placeholder='Name' required className=' w-full py-3 outline-none border-none rounded-lg InputStyle px-5 bg-[#FF6C00]'/>
                        <input type="email" placeholder='Email' className='w-full py-3 outline-none border-none rounded-lg InputStyle px-5 bg-[#FF6C00]' />
                        <input type="number" placeholder='Phone Number' required className='w-full py-3 outline-none border-none rounded-lg InputStyle px-5 bg-[#FF6C00]' />
                        <textarea name="" placeholder='Message' className=' resize-none w-full py-3 outline-none border-none rounded-lg InputStyle px-5 bg-[#FF6C00]' id="" required></textarea>
                        <div>
                            <button className='px-8 py-2 rounded-3xl bg-[#fff] font-bold text-[#FF6C00] shadow-lg'>Submit</button>
                        </div>
                    </form>
                </div>
                {/* Address */}
                <div className='flex flex-col gap-5'>
                    <div>
                        <div className='mb-2 text-[32px] titleText2 leading-tight text-[#0cd50f]'>Our Address</div>
                        <div className=' mb-5 text-[18px] titleText leading-tight font-bold text-[#fff]'>Hyper City PVT LTD,</div>
                        <div className='titleText text-sm text-[#fff] font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sed quidem libero est? Blanditiis odio natus error magnam minus esse</div>
                    </div>
                    <div>
                        <div className='mb-2 text-[32px] titleText2 leading-tight text-[#0cd50f]'>Email</div>
                        <div className='mb-5 text-[18px] titleText leading-tight text-[#fff] font-bold'>hypercity@gmail.com</div>
                    </div>
                    <div>
                        <div className='mb-2 text-[32px] titleText2 leading-tight text-[#0cd50f]'>Phone</div>
                        <div className='mb-2 text-[18px] titleText leading-tight text-[#fff] font-bold'>+91 877544658788</div>
                        <div className='mb-5 text-[18px] titleText leading-tight text-[#fff] font-bold'>+91 865434568767</div>
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
