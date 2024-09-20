import React, { useState, useEffect } from 'react';
import vegitables from "../assets/fruitVeg.png";
import nonGrocery from "../assets/nongrocery.jpg";
import groceryFood from "../assets/groceryFood.jpg";
import nonFood from "../assets/nonFood.jpg";
import freshFood from "../assets/butchery.jpg";
import departmentStore from "../assets/fancyItem.jpg"
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Category = () => {
  const categoryList = [
    { name: "Fruits & Vegetables", img: vegitables, link: 'vegitables' },
    { name: "Food", img: groceryFood, link: 'food' },
    { name: "Non Food", img: nonFood, link: 'nonFood' },
    { name: "Department Store", img: departmentStore, link: 'departmentStore' },
    { name: "Fresh Food", img: freshFood, link: 'freshFood' },
  ];

  // State for active category
  const [activeCategory, setActiveCategory] = useState('vegitables');
  const navigate = useNavigate();
  const location = useLocation();

  // Set default active category when the component mounts
  useEffect(() => {
    if (location.pathname === '/products') {
      navigate(`/products/vegitables`);
      setActiveCategory('vegitables');
    } else {
      const currentPath = location.pathname.split('/').pop();
      setActiveCategory(currentPath);
    }
  }, [location.pathname, navigate]);

  const handleCategoryClick = (link) => {
    setActiveCategory(link);
  };

  return (
    <div className='mt-10 relative px-5'>
      <div className='flex justify-center items-start gap-10 ScrollBarHidden overflow-x-auto p-5 hideScrollbar'>
        {categoryList.map((item) => (
          <Link key={item.name} to={`/products/${item.link}`} onClick={() => handleCategoryClick(item.link)}>
            <div className={`flex flex-col justify-center items-center gap-2 cursor-pointer ${
              activeCategory === item.link ? 'active-category' : ''
            }`}>
              <div className='xmd:w-[60px] w-[40px] h-[40px] xmd:h-[60px] md:h-[80px] md:w-[80px] lg:w-[100px] lg:h-[100px] rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <img src={item.img} className='w-full h-full object-cover rounded-full' alt={item.name} />
              </div>
              <div className={`text-sm font-semibold text-center ${
                activeCategory === item.link ? 'text-[#ff9d00]' : 'text-[#a7a2a2]'
              }`}>
                {item.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
