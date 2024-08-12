import React, { useState, useEffect, useRef } from 'react';
import cart1 from "../assets/cart1.png";
import cart2 from "../assets/cart2.png";
import cart3 from "../assets/cart3.png";
import cart4 from "../assets/cart4.png"
import cart5 from "../assets/cart5.png"
import cart6 from "../assets/cart6.png"
import homeBanner from "../assets/home-banner.png"
import homeBanner2 from "../assets/home-banner2.png"


const Carousel = () => {
    const [rotate, setRotate] = useState(0);
    const [active, setActive] = useState(0);
    const ImageArray = [cart1, cart2, cart3,cart4,cart5,cart6];
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

    return (
        <div className="slider">
            {/* <div className=' flex justify-center pt-10 homeTitle text-center'>
                <div className='absolute px-2 font-black'>Unwavering Commitment to Quality</div>
            </div> */}
            <div className=' flex justify-center items-center'>
                <div className='absolute top-10 text-center z-10'>
                    <div className=' grid grid-cols-2 px-4'>
                        <div className='homeTitle -rotate-[10deg]'>Your</div>
                        <div className='homeTitle rotate-[10deg]'>Trustworthy</div>
                        <div className='homeTitle -rotate-[10deg] pt-5'>Quality</div>
                        <div className='homeTitle rotate-[10deg] pt-5'>Source</div>
                    </div>
                </div>
                {/* <div className=' flex justify-center'>
                        <div className=' absolute -z-0 top-10'>
                            <img src={homeBanner} className='w-auto h-[260px] homeBannerAnimation' alt="" />
                        </div>
                    </div> */}
            </div>
            <div className="title">
                {/* Hyper City! */}
            </div>
            <div className="images" style={{ '--rotate': `${rotate}deg` }}>
                {ImageArray.map((image, i) => (
                    <div className="item w-[100px] h-[100px]" style={{ '--i': i + 1 }} key={i}>
                        <img src={image} className='w-full h-full object-contain' alt={`Slide ${i + 1}`} />
                    </div>
                ))}
            </div>
            {/* <button id="prev" onClick={prevSlider}>&lt;</button>
            <button id="next" onClick={nextSlider}>&gt;</button> */}
        </div>
    );
};


export default Carousel
