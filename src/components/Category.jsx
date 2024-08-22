import React, { useState } from 'react'
import vegitables from "../assets/vegitables.jpeg"
import fruits from "../assets/fruits.jpg"
import grocery from "../assets/grocery.png"
import cosmetics from "../assets/cosmetics.jpg"
import footwear from "../assets/footwear.jpg"

const Category = () => {
    
    

    const categoryList = [{
        name : "Vegitables",
        img : vegitables
    },
    {
        name : "Fruits",
        img : fruits
    },
    {
        name : "Grocery",
        img : grocery
    },
    {
        name : "Cosmetics",
        img : cosmetics
    },
    {
        name : "Footwear",
        img : footwear
    }
]
  return (
    <div className=' mt-10'>
      <div className=' flex justify-center items-center gap-5 md:gap-10 md:mt-16'>
        {categoryList.map((item)=>(
            <div className='w-[60px] h-[60px] md:h-[80px] md:w-[80px] lg:w-[100px] lg:h-[100px] rounded-full flex flex-col justify-center items-center gap-2 cursor-pointer '>
                {/* Category Image */}
                <div className='xmd:w-[60px] w-[40px] h-[40px] xmd:h-[60px] md:h-[80px] md:w-[80px] lg:w-[100px] lg:h-[100px] rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <img src={item.img} className=' w-full h-full object-cover rounded-full' alt="" />
                </div>
                {/* Category Name */}
                <div className=' text-sm font-semibold text-[#a7a2a2]'>{item.name}</div>
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default Category
