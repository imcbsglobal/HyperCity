import React from 'react';
import vegitables from "../assets/fruitVeg.png";
import nonGrocery from "../assets/nongrocery.jpg";
import groceryFood from "../assets/groceryFood.jpg"
import nonFood from "../assets/nonFood.jpg"
import freshFood from "../assets/butchery.jpg"
import { Link } from 'react-router-dom';

const Category = () => {
  const categoryList = [
    { name: "Fruits & Vegitables", img: vegitables, link: 'vegitables' },
    { name: "Food", img: groceryFood, link: 'food' },
    { name: "Non Food", img: nonFood, link: 'nonFood' },
    { name: "Department Store", img: nonGrocery, link: 'departmentStore' },
    { name: "Fresh Food", img: freshFood, link: 'freshFood' },
  ];

  return (
    <div className='mt-10 relative px-5'>
      <div className='flex justify-center items-start gap-10 ScrollBarHidden overflow-x-auto p-5 hideScrollbar'>
        {categoryList.map((item) => (
          <Link key={item.name} to={`/products/${item.link}`}>
            <div className=' flex flex-col justify-center items-center gap-2 cursor-pointer'>
              <div className='xmd:w-[60px] w-[40px] h-[40px] xmd:h-[60px] md:h-[80px] md:w-[80px] lg:w-[100px] lg:h-[100px] rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <img src={item.img} className='w-full h-full object-cover rounded-full' alt={item.name} />
              </div>
              <div className='text-sm font-semibold text-[#a7a2a2] text-center'>{item.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
