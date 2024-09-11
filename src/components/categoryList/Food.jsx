import React from 'react';
import grocery from "../../assets/groceryFood.jpg";
import nonGrocery from "../../assets/nonFood.jpg";
import roastery from "../../assets/roastery.jpeg";
import frozenFood from "../../assets/frozen.jpg";
import beverageDrink from "../../assets/drinks.jpeg";

const Food = () => {
    const foodItems = [
        { name: 'Grocery Foods', img: grocery },
        { name: 'Non-Grocery Foods', img: nonGrocery },
        { name: 'Beverage & Drinks Foods', img: beverageDrink },
        { name: 'Roastery Foods', img: roastery },
        { name: 'Frozen Foods', img: frozenFood },
    ];

    return (
        <div>
            <div className='grid grid-cols-3 gap-4 place-items-center lg:w-[1200px] mx-auto llg:w-[1400px]'>
                {foodItems.map((item, i) => (
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
    );
}

export default Food;
