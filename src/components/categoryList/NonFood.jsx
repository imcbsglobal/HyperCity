import React from 'react'
import personalCare from "../../assets/homecare.jpeg"
import babyCare from "../../assets/babycare.jpg"
import homeCare from "../../assets/nonFood.jpg"
import pooja from "../../assets/pooja.jpg"

const NonFood = () => {
    const nonFoodItems = [
        { name:'Personal Care', img : personalCare },
        { name:'Baby Care', img : babyCare },
        { name : 'Home Care', img : homeCare  },
        { name : 'Pooja', img : pooja }
    ]
  return (
    <div>
      <div className='grid grid-cols-3 gap-4 place-items-center lg:w-[1200px] mx-auto llg:w-[1400px]'>
                {nonFoodItems.map((item, i) => (
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

export default NonFood
