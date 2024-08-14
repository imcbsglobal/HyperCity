import React, { useState, useEffect, useRef } from 'react';
import cart1 from "../assets/cart1.png";
import cart2 from "../assets/cart2.png";
import cart3 from "../assets/cart3.png";
import cart4 from "../assets/cart4.png"
import cart5 from "../assets/cart5.png"
import cart6 from "../assets/cart6.png"
import homeBanner from "../assets/home-banner.png"
import homeBanner2 from "../assets/home-banner2.png"
// import slider1 from "../assets/slide1.png"
// import slider2 from "../assets/slide2.png"
// import slider3 from "../assets/slide3.png"
// import margBg from "../assets/branch1.jpeg"
import homeVideo from "../assets/home-video.mp4"
import blackShade from "../assets/black-shade.png"


const Carousel = () => {
    const [rotate, setRotate] = useState(0);
    const [active, setActive] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);

    // const images = [slider1, slider2, slider3];
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
                    <div className=' grid grid-cols-2 px-4 mt-20'>
                        <div className='homeTitle -rotate-[10deg]'>Quality</div>
                        <div className='homeTitle rotate-[10deg] '>You</div>
                        <div className='homeTitle -rotate-[10deg] mt-[-20px]'>Can</div>
                        <div className='homeTitle rotate-[10deg] mt-[-20px]'>Trust</div>
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
                    <div className='text-[82px] text-[#fff] text-center leading-tight'>Your Trust Worthy Quality Source</div>
                    <div className='text-center px-20 text-[#ffffff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis adipisci doloremque, totam quibusdam repudiandae explicabo facere ipsam omnis, tempore nisi libero, soluta ullam dolore voluptatum. Autem quidem facere provident at.</div>
                    <div className=' justify-center items-center flex mt-5'>
                        <button className='homeTitle1 font-bold px-8 py-2 rounded-3xl bg-[#fff] text-[#0cd50f]'>Discover More</button>
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
            
            <div className="images" style={{ '--rotate': `${rotate}deg` }}>
                {ImageArray.map((image, i) => (
                    <div className="item " style={{ '--i': i + 1 }} key={i}>
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
