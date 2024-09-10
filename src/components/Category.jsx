import React from 'react';
import vegitables from "../assets/vegitables.jpeg";
import fruits from "../assets/fruits.jpg";
import grocery from "../assets/grocery.jpg";
import cosmetics from "../assets/cosmetics.jpg";
import footwear from "../assets/footwear.jpg";
import nonGrocery from "../assets/nongrocery.jpg";
import beverageandDrinks from "../assets/drinks.jpg";
import roastery from "../assets/roastery.jpeg";
import frozenFood from "../assets/frozenFoods.png";
import personalcare from "../assets/personalCare.png";
import babyCare from "../assets/babyCare.png";
import homeCare from "../assets/homeCare.png";
import pooja from "../assets/pooja.png";
import electronics from "../assets/electronics.png";
import toysSport from "../assets/sports.jpeg";
import smallappliance from "../assets/smallAppliance.jpg";
import fishery from "../assets/fishery.png";
import butchery from "../assets/butchery.jpg";
import hotFood from "../assets/hotFood.png";
import bakery from "../assets/bakery.png";
import { Link } from 'react-router-dom';

const Category = () => {
  const categoryList = [
    { name: "Vegitables", img: vegitables, link: 'vegitables' },
    { name: "Fruits", img: fruits, link: 'fruits' },
    { name: "Grocery", img: grocery, link: 'grocery' },
    { name: "Non-Grocery", img: nonGrocery, link: 'nonGrocery' },
    { name: "Cosmetics", img: cosmetics, link: 'cosmetics' },
    { name: "Footwear", img: footwear, link: 'footwear' },
    { name: "Beverage & Drinks", img: beverageandDrinks, link: 'beverageandDrinks' },
    { name: "Roastery", img: roastery, link: 'roastery' },
    { name: "Frozen Foods", img: frozenFood, link: 'frozenFoods' },
    { name: "Personal Care", img: personalcare, link: 'personalCare' },
    { name: "Baby Care", img: babyCare, link: 'babyCare' },
    { name: "Home Care", img: homeCare, link: 'homeCare' },
    { name: "Pooja", img: pooja, link: 'pooja' },
    { name: "House Hold", img: homeCare, link: 'houseHold' },
    { name: "Toys & Sports", img: toysSport, link: 'toysAndSports' },
    { name: "Small Appliance", img: smallappliance, link: 'smallAppliance' },
    { name: "Electronics", img: electronics, link: 'electronicsAndIT' },
    { name: "Fishery", img: fishery, link: 'fishery' },
    { name: "Butchery", img: butchery, link: 'butchery' },
    { name: "Hot Food", img: hotFood, link: 'hotFood' },
    { name: "Bakery & Pastry", img: bakery, link: 'bakery' },    
  ];

  return (
    <div className='mt-10 relative px-5'>
      <div className='flex justify-start items-start gap-10 ScrollBarHidden overflow-x-auto p-5 hideScrollbar'>
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
