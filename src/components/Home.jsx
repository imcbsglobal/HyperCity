import React, { useState, useEffect, useRef } from 'react';
import cart1 from "../assets/cart1.png";
import cart2 from "../assets/cart2.png";
import cart3 from "../assets/cart3.png";
import cart4 from "../assets/cart4.png"
import cart5 from "../assets/cart5.png"
import cart6 from "../assets/cart6.png"
import Carousel from './Carousel';
import cartIcon from "../assets/cart-icon.png"
import Testimonials from './Testimonials';
import aboutImg from "../assets/about-img.jpg"
import LogoSlider from './LogoSlider';
import MartBg from "../assets/mart-bg.jpeg"
import blackShade from "../assets/black-shade.png"
import greenShade from "../assets/green-shade.png"
import MartBg2 from "../assets/mart-bg2.jpeg"
import wave from "../assets/wave.png"
import bottomPart from "../assets/bottom-part.png"

const Home = () => {
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
        <div>
            <div>
                <Carousel/>
            </div>

            {/* Offer Section */}
            <section>
                <div>
                    <div></div>
                </div>
            </section>

            {/* About Section */}
            <section>
                <div>
                    {/* About Background */}
                    <img src="" alt="" />
                </div>
                <div className=' lg:max-w-[1200px] lg:mx-auto'>
                    <div className=' px-6 py-10'>
                        {/* Left */}
                        <div className='aboutImg mx-auto BlobDesign'>
                            <img src={aboutImg} className='w-full h-full object-cover rounded-full' alt="" />
                        </div>

                        {/* Right */}
                        <div className=''>
                            <div className='titleText font-bold mb-2 text-[#FF6C00]'>About Us</div>
                            <div className='titleText2 font-bold text-[36px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing</div>
                            <div className='paraText mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem corrupti ipsum! Explicabo ad, cupiditate nisi voluptatibus deleniti harum incidunt eius tempora excepturi reiciendis nihil et! Aperiam fuga vitae magnam.
                            Cupiditate in omnis cumque, quae dolorem velit nesciunt consequatur, quibusdam laborum aperiam possimus molestias enim sapiente. Atque tempora itaque totam. Totam perspiciatis tempore non blanditiis atque et accusantium voluptas laborum.
                            </div>
                            <div>
                                <button className='titleText font-bold px-8 py-2 rounded-3xl bg-[#FF6C00] text-[#fff] buttonShadow'>Read More</button>
                            </div>
                            <div className=' mt-10 flex justify-center items-center text-center'>
                                <div className=''>
                                    <div className='p-2'>
                                        <div className='titleText1 text-[48px] text-[#0cd50f] drop-shadow-md'>10+</div>
                                        <div className='titleText font-bold text-[#0cd50f]'>Years Of Trust</div>
                                    </div>
                                    <div className='p-2'>
                                        <div className='titleText1 text-[48px] text-[#0cd50f] drop-shadow-md'>30+</div>
                                        <div className='titleText font-bold text-[#0cd50f]'>Products</div>
                                    </div>
                                    <div className='p-2'>
                                        <div className='titleText1 text-[48px] text-[#0cd50f] drop-shadow-md'>100K+</div>
                                        <div className='titleText font-bold text-[#0cd50f]'>Loyal Customers</div>
                                    </div>
                                    <div className='p-2'> 
                                        <div className='titleText1 text-[48px] text-[#0cd50f] drop-shadow-md'>2+</div>
                                        <div className='titleText font-bold text-[#0cd50f]'>Branches</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=' mb-10 flex justify-center items-center relative'>
                    {/* Green Shade */}
                    <div className=' absolute top-0 left-0 right-0 bottom-0 -z-10'>
                        <img src={greenShade} className='w-full h-full object-cover' alt="" />
                    </div>

                    {/* Green Background */}
                    <div className='absolute top-0 left-0 right-0 bottom-0 -z-20'>
                        <img src={MartBg2} className='w-full h-full object-cover martBg2' alt="" />
                    </div>

                    {/* Mission & Vision */}
                    <div className=' px-6 lg:max-w-[1200px] lg:mx-auto pt-10 pb-20 z-10'>
                        {/* Left */}
                        <div>
                            <div className='titleText2 font-bold text-[44px] mb-5 leading-tight text-[#fff] drop-shadow-sm'>Our Mission & Vision</div>
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>

                        {/* Right */}
                        <div>
                            {/* Mission */}
                            <div className=' mb-10'>
                                <div className='titleText font-bold text-[32px] mb-5 leading-tight text-[#fff] drop-shadow-sm'>Our Mission</div>
                                <div className='paraText text-[#fff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo aperiam quos, vel aut facilis illum animi veritatis distinctio minima dolore soluta aliquam nam laboriosam et ipsam mollitia. Cum, natus.</div>
                            </div>

                            {/* Vision */}
                            <div>
                                <div className='titleText font-bold text-[32px] mb-5 leading-tight text-[#fff] drop-shadow-sm'>Our Vision</div>
                                <div className='titleText paraText text-[#fff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugit nesciunt molestiae inventore, quia vitae asperiores iure sed, pariatur voluptas enim voluptatem libero amet. Quis rem vitae ex inventore quidem!</div>
                            </div>
                        </div>

                    </div>
                    <div className=' absolute bottom-[-10px] left-0 right-0'>
                        <img src={bottomPart} className=' w-full h-full object-cover ' alt="" />
                    </div>
                </div>
            </section>

            <section>
                <div className='flex justify-center items-center mb-10'>
                    <div className=' px-6 lg:max-w-[1200px] lg:mx-auto'>
                        <div className='titleText2 font-bold text-[44px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm'>Our Products</div>
                        <div className='paraText mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laborum optio nesciunt eius officiis ea, voluptate impedit veniam dolorum labore cum excepturi asperiores nihil tempore sequi adipisci perspiciatis laudantium? Officiis?
                        Optio eos accusamus dicta facilis ducimus reiciendis maiores, repudiandae minus quis, at perspiciatis. Nam impedit quaerat tenetur. Ullam commodi perferendis laudantium illum veniam molestiae sint, repellendus aliquid assumenda blanditiis ab.
                        </div>

                        {/* Product List */}
                        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-10'>
                            <div className=' w-full h-[300px] productBox'>

                            </div>
                            <div className=' w-full h-[300px] productBox'>

                            </div>
                            <div className=' w-full h-[300px] productBox'>

                            </div>
                            <div className=' w-full h-[300px] productBox'>

                            </div>
                            <div className=' w-full h-[300px] productBox'>

                            </div>
                            <div className=' w-full h-[300px] productBox'>

                            </div>
                            <div className=' w-full h-[300px] productBox'>

                            </div>
                            <div className=' w-full h-[300px] productBox'>

                            </div>
                        </div>
                        <div className='flex justify-center mt-10 items-center'>
                            <button className='px-8 py-2 rounded-3xl buttonShadow text-[#fff] bg-[#FF6C00] titleText font-bold text-sm'>View More</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=' mb-10'>
                    <div className='px-6 lg:max-w-[1200px] lg:mx-auto'>
                        {/* Left */}
                        <div>
                            <div className='titleText2 font-bold text-[44px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm text-center'>Why People Choose Hyper City</div>
                            <div className='paraText mb-10 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In animi corporis minima molestias sint molestiae labore necessitatibus, qui inventore assumenda, rem dolore consequuntur quis commodi, dolorum porro natus magnam amet.
                            </div>
                        </div>

                        {/* Right */}
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <div className='flex justify-center items-center gap-5 Box px-5 py-3'>
                                <div className='w-auto h-[60px]'>
                                    <img src={cartIcon} className='w-full h-full object-contain drop-shadow-lg' alt="" />
                                </div>
                                <div className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rerum inventore pariatur</div>
                            </div>
                            <div className='flex justify-center items-center gap-5 px-5 py-3 Box'>
                                <div className='w-auto h-[60px]'>
                                    <img src={cartIcon} className='w-full h-full object-contain drop-shadow-lg' alt="" />
                                </div>
                                <div className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rerum inventore pariatur</div>
                            </div>
                            <div className='flex justify-center items-center gap-5 Box px-5 py-3'>
                                <div className=' w-auto h-[60px]'>
                                    <img src={cartIcon} className=' h-full w-full object-contain drop-shadow-lg' alt="" />
                                </div>
                                <div className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rerum inventore pariatur</div>
                            </div>
                            <div className='flex justify-center items-center gap-5 px-5 py-3 Box'>
                                <div className=' w-auto h-[60px]'>
                                    <img src={cartIcon} className=' h-full w-full object-contain drop-shadow-lg' alt="" />
                                </div>
                                <div className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rerum inventore pariatur</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=' mb-10 flex justify-center items-center'>
                    <div className=' lg:max-w-[1200px] lg:mx-auto px-6'>
                        <div className='mb-5 text-[42px] titleText2 leading-tight text-[#0cd50f]'>Our Customers Love</div>
                        <div className='mb-5 paraText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla et maxime impedit quam, porro deleniti saepe aspernatur ipsum temporibus nemo, consectetur eum, earum ipsa commodi! Praesentium deserunt maxime obcaecati?
                        Aliquam earum velit, nobis fugiat soluta qui facere molestias quasi deleniti voluptates hic alias necessitatibus dolores nesciunt et veniam non quam ad accusantium voluptatibus similique facilis odit corporis quos! Exercitationem.
                        </div>
                        {/* <div className='mt-10'>
                            <Testimonials/>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className='mb-10 md:px-10 lg:max-w-[1200px]'>
                <div>
                   <div className=''>
                        <div className='mb-5 text-[42px] titleText2 leading-tight text-[#0cd50f] text-center'>Our Brands</div>
                        {/* Brand Logo's */}
                        <div className='mt-10 lg:mt-16 overflow-hidden'>
                            <LogoSlider/>
                        </div>
                    </div> 
                </div>
            </section>

            <section>
                <div className='flex justify-center items-center relative'>
                    <div className=' absolute top-0 left-0 right-0 bottom-0 -z-20'>
                       <img src={MartBg} className=' w-full h-full object-cover' alt="" />
                    </div>
                    <div className=' absolute top-0 left-0 right-0 bottom-0 -z-10'>
                        <img src={blackShade} className=' w-full h-full object-cover' alt="" />
                    </div>
                    <div className='md:flex justify-center items-center w-full px-6 lg:max-w-[1200px] lg:mx-auto py-10'>
                        <div className='w-full mb-10'>
                            <div className='text-center mb-5 text-[42px] titleText2 leading-tight text-[#ffffff]'>Get In Touch</div>
                            <form action="" className=' flex flex-col justify-center items-center gap-5 w-full'>
                                <input type="text" placeholder='Name' required className=' w-full py-3 outline-none border-none rounded-lg InputStyle px-5 bg-[#FF6C00]'/>
                                <input type="email" placeholder='Email' className='w-full py-3 outline-none border-none rounded-lg InputStyle px-5 bg-[#FF6C00]' />
                                <input type="number" placeholder='Phone Number' required className='w-full py-3 outline-none border-none rounded-lg InputStyle px-5 bg-[#FF6C00]' />
                                <textarea name="" placeholder='Message' className=' resize-none w-full py-3 outline-none border-none rounded-lg InputStyle px-5 bg-[#FF6C00]' id="" required></textarea>
                                <div>
                                    <button className='px-8 py-2 rounded-3xl bg-[#fff] font-bold text-[#FF6C00] shadow-lg'>Submit</button>
                                </div>
                            </form>
                        </div>
                        {/* Address */}
                        <div className='flex flex-col gap-5'>
                            <div>
                                <div className='mb-2 text-[32px] titleText2 leading-tight text-[#0cd50f]'>Our Address</div>
                                <div className=' mb-5 text-[18px] titleText leading-tight font-bold text-[#fff]'>Hyper City PVT LTD,</div>
                                <div className='titleText text-sm text-[#fff] font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sed quidem libero est? Blanditiis odio natus error magnam minus esse</div>
                            </div>
                            <div>
                                <div className='mb-2 text-[32px] titleText2 leading-tight text-[#0cd50f]'>Email</div>
                                <div className='mb-5 text-[18px] titleText leading-tight text-[#fff] font-bold'>hypercity@gmail.com</div>
                            </div>
                            <div>
                                <div className='mb-2 text-[32px] titleText2 leading-tight text-[#0cd50f]'>Phone</div>
                                <div className='mb-2 text-[18px] titleText leading-tight text-[#fff] font-bold'>+91 877544658788</div>
                                <div className='mb-5 text-[18px] titleText leading-tight text-[#fff] font-bold'>+91 865434568767</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
