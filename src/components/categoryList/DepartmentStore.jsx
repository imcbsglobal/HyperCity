import React from 'react'
import electronics from "../../assets/electronics.png"
import fancy from "../../assets/fancy.jpg"
import houseHolds from "../../assets/household.jpg"
import sportsToys from "../../assets/sportstoys.jpeg"
import orangeShade from "../../assets/orange.png"

const DepartmentStore = () => {
    const departmentStoreItems = [
        { name : 'Electronics & IT', img : electronics },
        { name : 'Gift, Stationary & Fancy', img : fancy },
        { name : 'House Holds', img : houseHolds },
        { name : 'Sports & Toys', img : sportsToys }
    ]
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center lg:w-[1200px] mx-auto llg:w-[1400px]'>
                {departmentStoreItems.map((item, i) => (
                    <div 
                        key={i}
                        className={` ${ 
                            i === 1 || i === 3 ? '' : ''
                        } border-2  rounded-3xl  flex flex-col items-center justify-center w-[300px] h-[300px] relative llg:w-[450px] llg:h-[300px] DarkBox2`}
                    >
                        <div className=' absolute top-0 bottom-0 left-0 right-0 -z-10 rounded-3xl opacity-25'>
                            <img src={orangeShade} className=' w-full h-full object-cover rounded-3xl' alt="" />
                        </div>
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

export default DepartmentStore
