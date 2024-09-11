import React from 'react'
import fishery from "../../assets/fishery.png"
import butchery from "../../assets/butchery.jpg"
import hotFood from "../../assets/hotFood.png"
import bakery from "../../assets/bakery.png"


const FreshFood = () => {
    const freshFoodItem = [
        { name: 'Fishery', img: fishery },
        { name: 'Butchery', img: butchery },
        { name: 'Beverage & Drinks Foods', img: hotFood },
        { name: 'Bakery & Pastry', img: bakery },
    ];
  return (
    <div>
      <div className='grid grid-cols-3 gap-4 place-items-center lg:w-[1200px] mx-auto llg:w-[1400px]'>
                {freshFoodItem.map((item, i) => (
                    <div 
                        key={i}
                        className={` ${ 
                            i === 1 || i === 3 ? '' : ''
                        } border-2  rounded-3xl  flex flex-col items-center justify-center w-[300px] h-[300px] relative llg:w-[450px] llg:h-[300px] DarkBox2`}
                    >
                        <div className='h-[300px] llg:h-[300px] w-full absolute mix-blend-multiply'>
                            <img src={item.img} className=' h-full w-full object-cover rounded-3xl' alt="" />
                        </div>
                        <div className=' absolute z-10 font-bold text-xl text-[#ff8f18] text-center drop-shadow-2xl px-8 py-3 bg-[#ffffff] w-full'>{item.name}</div>

                    </div>
                ))}
            </div>
    </div>
  )
}

export default FreshFood
