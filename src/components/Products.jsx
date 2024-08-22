import React from 'react'
import Footer from './Footer'
import Testimonials from './Testimonials'
import { BiSolidPlusSquare } from "react-icons/bi";
import { FaFileImage } from "react-icons/fa";
import product5 from "../assets/product5.png"
import customer from "../assets/customer.png"
import mobileBg from "../assets/mobil-bg1.jpg"
import ProductCarousel from './ProductCarousel';
import Category from './Category';
import OfferPosters from './OfferPosters';



const Products = () => {
 
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
            <div className=' pt-2  lg:mx-auto dlg:max-w-[1500px] px-6'>
                <div className='titleText2 font-bold text-[36px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm text-center'>Our Products</div>
                <div className='paraText text-center lg:px-56'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta, voluptates totam dicta eveniet odio maiores hic repellat odit inventore temporibus suscipit mollitia tempore corporis sequi? Fugiat velit aliquam exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, minus cumque possimus eligendi beatae fugit, accusamus facere culpa temporibus nihil vel? Obcaecati doloremque repellat tempora voluptatum est. Eveniet, veniam labore!
                </div> 


              {/* Offer Posters */}

              <section>
                <OfferPosters/>
              </section>

                {/* <section className='mt-10'>
                  <div className=' flex justify-center items-center gap-10'>
                    <div><button className=' px-8 py-2 bg-[#FF6C00] text-white font-bold rounded-lg flex  items-center gap-2'>Select <span><FaFileImage/></span></button>
                    
                    </div>
                    <div><button className='px-8 py-2 bg-[#FF6C00] text-white font-bold rounded-lg flex items-center gap-2'>Upload <span><BiSolidPlusSquare/></span></button>
                    </div>
                  </div>
                </section> */}


                {/* Category List */}

                <section>
                  <Category/>
                </section>

                {/* Product List */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 llg:grid-cols-4 place-items-center mt-10 gap-10'>
                    
                    <div className=' w-full h-[300px] productBox pb-2'>
                      <div className='w-auto h-[200px]'>
                          <img src={product5} className='h-full w-full object-contain drop-shadow-2xl' alt="" />
                      </div>
                      <div className=' flex flex-col justify-center items-center titleText2'>
                        <div className='text-xl text-[#FF6C00] drop-shadow-sm'>Masala Lays Chips</div>
                        <div className='text-sm titleText mt-1'>Lorem ipsum dolor sit amet.</div>
                        </div>
                        <div className='flex justify-center items-center '>
                          <button className='px-8 py-1 mt-1 rounded-3xl bg-[#ff2020] font-bold text-[#fff] drop-shadow-md'>Delete</button>
                        </div>
                    </div>
                    <div className=' w-full h-[300px] productBox'>

                    </div><div className=' w-full h-[300px] productBox'>

                    </div>
                    <div className=' w-full h-[300px] productBox'>

                    </div>
                    <div className=' w-full h-[300px] productBox'>

                    </div>
                    <div className=' w-full h-[300px] productBox'>

                    </div>
                    <div className=' w-full h-[300px] productBox'>

                    </div>
                    <div className=' w-full h-[300px] productBox'>

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
            <div className='paraText mb-5 lg:px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, placeat expedita eum ratione ex itaque veritatis quam pariatur incidunt. Nostrum ad adipisci natus voluptates! Voluptatem placeat nisi quaerat quod iusto.Molestiae soluta ad sint doloribus autem. Aliquid ex sed alias magni molestias. Quibusdam in odit cumque ipsa deserunt nam quos reiciendis a provident illum voluptate, doloremque voluptates maiores architecto explicabo!
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
