import React, { useState, useEffect, useRef } from 'react';
import cart1 from "../assets/cart1.png";
import cart2 from "../assets/cart2.png";
import cart3 from "../assets/cart3.png";
import cart4 from "../assets/cart4.png"
import cart5 from "../assets/cart5.png"
import cart6 from "../assets/cart6.png"
import groceryCart from "../assets/grocery-cart.png"
import fruitCarts from "../assets/fruit-cart.png"
import homeBanner2 from "../assets/home-banner2.png"
import homeVideo from "../assets/home-video.mp4"
import blackShade from "../assets/black-shade.png"
import { motion } from "framer-motion"
import fruitCart from "../assets/fruits-cart.png"
import meatCart from "../assets/meat-cart.png"
import stationeryCart from "../assets/stationery-cart.png" 
import meatCarts from "../assets/meats-cart.png"



const Carousel = ({ handlScrollDown }) => {
    const [rotate, setRotate] = useState(0);
    const [active, setActive] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);

    // const images = [slider1, slider2, slider3];
    const ImageArray = [cart2, fruitCarts, groceryCart,meatCarts,fruitCarts,groceryCart];
    const countItem = ImageArray.length; // Number of images
    const rotateAdd = 360 / countItem;
    const autoNextRef = useRef();

    const nextSlider = () => {
        setActive(prev => (prev + 1 >= countItem ? 0 : prev + 1));
        setRotate(prev => prev + rotateAdd);
    };

    const prevSlider = () => {
        setActive(prev => (prev - 1 < 0 ? countItem - 1 : prev - 1));
        setRotate(prev => prev - rotateAdd);
    };

    useEffect(() => {
        autoNextRef.current = nextSlider;
    });

    useEffect(() => {
        const autoNext = setInterval(() => autoNextRef.current(), 3000);
        return () => clearInterval(autoNext);
    }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    //     }, 3000);
        
    //     return () => clearInterval(interval);
    // }, [images.length]);
    return (
        <div className="slider">
            {/* <div className=' absolute left-[50%] top-[50%] translate-[-50%-50%] titleOrg'>
                <div className='text-[72px] font-black text-[#fff] text-center'>Your Trust Worthy Quality Source</div>
            </div> */}

            {/* <div className=' flex justify-center pt-10 homeTitle text-center'>
                <div className='absolute px-2 font-black'>Unwavering Commitment to Quality</div>
            </div> */}
            <div className=' flex justify-center items-center'>
                <div className='absolute top-10 lg:top-[20px] text-center z-10 lg:right-0 lg:hidden'>
                    <div className=' grid grid-cols-2 px-4 mt-32'>
                        <motion.div 
                            initial={{scale:0, opacity:0}}
                            animate={{scale:1,opacity:1}}
                            transition={{duration:1,ease:'backInOut'}}
                            className='homeTitle -rotate-[10deg]'>
                            Quality
                        </motion.div>
                        <motion.div
                            initial={{scale:0, opacity:0}}
                            animate={{scale:1,opacity:1}}
                            transition={{duration:1,ease:'backInOut',delay:.5}}
                        className='homeTitle rotate-[10deg] '>
                            You
                        </motion.div>
                        <motion.div
                            initial={{scale:0, opacity:0}}
                            animate={{scale:1,opacity:1}}
                            transition={{duration:1,ease:'backInOut',delay:1}}
                        className='homeTitle -rotate-[10deg] mt-[-20px]'>Can</motion.div>
                        <motion.div
                            initial={{scale:0, opacity:0}}
                            animate={{scale:1,opacity:1}}
                            transition={{duration:1,ease:'backInOut',delay:1.5}}
                        className='homeTitle rotate-[10deg] mt-[-20px]'>Trust</motion.div>
                    </div>
                </div>
                
                {/* <div className=' flex justify-center'>
                        <div className=' absolute -z-0 top-10'>
                            <img src={homeBanner} className='w-auto h-[260px] homeBannerAnimation' alt="" />
                        </div>
                    </div> */}
            </div>
            <div className=''>
                <div className=' w-full h-full absolute'>
                    <div className=' absolute w-full h-full'>
                        <img src={blackShade} className='h-full w-full object-cover' alt="" />
                    </div>
                   <video autoPlay loop muted playsInline src={homeVideo} className=' w-full h-full object-cover opacity-35'></video>
                </div>
                {/* <div className='  h-[500px] bg-[#fff] rounded-l-[100px] absolute right-0 top-64'>
                    <img src={margBg} className=' absolute w-full h-full object-cover rounded-l-[100px] blur-[5px] border-[1px] border-white' alt="" />
                </div> */}
                <div className=' absolute left-[40%] top-[30%] translate-[-50%-50%] titleOrg hidden lg:block'>
                    <div className='text-[82px] text-[#fff] text-center leading-tight home-Quote'>Your Trust Worthy Quality <span className='block'>Source</span></div>
                    <div className='text-center px-20 text-[#ffffff] homePara paraText'>Depend on us for unparalleled quality in every product we offer. With a steadfast commitment to excellence and a wealth of experience, we ensure that each item meets the highest standards. Our dedication to providing only the best makes us a reliable source for all your needs, promising consistency and satisfaction with every purchase.</div>
                    <div className=' justify-center items-center flex mt-5 cursor-pointer'>
                        <button className='paraText font-bold px-8 py-2 rounded-3xl bg-[#fff] text-[#0cd50f] homeButton cursor-pointer relative z-30' onClick={handlScrollDown}>Discover More</button>
                    </div>
                </div>
                {/* <div className=''>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute transition-opacity duration-1000 ease-in-out  right-5 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                        style={{ width: 'auto', height: index === 2 ? '650px' : '650px', top: '150px' }}
                    >
                        <img src={image} className='object-contain w-full h-full drop-shadow-2xl' alt={`slider${index + 1}`} />
                    </div>
                ))}
            </div> */}
                
            </div>
            <div className="title">
                {/* Hyper City! */}
            </div>
            
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1,delay:.2,ease:'backInOut'}}
            className="images" style={{ '--rotate': `${rotate}deg` }}>
                {ImageArray.map((image, i) => (
                    <div className="item " style={{ '--i': i + 1 }} key={i}>
                        <img src={image} className='w-full h-full object-contain' alt={`Slide ${i + 1}`} />
                    </div>
                ))}
            </motion.div>

            {/* <button id="prev" onClick={prevSlider}>&lt;</button>
            <button id="next" onClick={nextSlider}>&gt;</button> */}
        </div>
    );
};


export default Carousel
