import React from 'react'
import Footer from './Footer'

const Products = () => {
  return (
    <div>
      <section>
        <div className='pt-20 mb-10'>
            <div className=' pt-2  lg:mx-auto dlg:max-w-[1500px] px-6'>
                <div className='titleText2 font-bold text-[36px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm text-center'>Our Products</div>
                <div className='paraText text-center lg:px-56'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta, voluptates totam dicta eveniet odio maiores hic repellat odit inventore temporibus suscipit mollitia tempore corporis sequi? Fugiat velit aliquam exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, minus cumque possimus eligendi beatae fugit, accusamus facere culpa temporibus nihil vel? Obcaecati doloremque repellat tempora voluptatum est. Eveniet, veniam labore!
                </div> 

                {/* Product List */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center mt-10 gap-10'>
                    
                    <div className=' w-full h-[300px] productBox'>

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

      <section className='bg-[#FF6C00]'>
        <Footer/>
      </section>
    </div>
  )
}

export default Products
