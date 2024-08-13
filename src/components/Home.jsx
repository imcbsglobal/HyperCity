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
import Footer from './Footer';
import whatsapp from "../assets/whatsapp.png"
import { IoClose } from "react-icons/io5";
import messageBox from "../assets/message-box.png"
import chatBg from "../assets/chatting-bg.png"
import { FaWhatsapp } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import logo from "../assets/single-logo.png"
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import homeBanner from "../assets/home-banner.png"
import brushFrame from "../assets/brush-frame.png"
import missionVision from "../assets/mission-vision.jpg"
import OfferSection from './OfferSection';
import choseUs from "../assets/chose-us.jpg"
import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
import product4 from "../assets/product4.png"
import product5 from "../assets/product5.png"
import product6 from "../assets/product6.png"
import product7 from "../assets/product7.png"
import product8 from "../assets/product8.png"



const Home = () => {
    const [rotate, setRotate] = useState(0);
    const [active, setActive] = useState(0);
    const [openChat, setOPenChat] = useState(false)

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

    const handleOpenChatc = () => {
        setOPenChat(!openChat)
    }
    return (
        <div>
            <div className='fixed z-[100] bottom-5 right-2'>
                <img src={whatsapp} onClick={handleOpenChatc} className='w-auto h-[70px] object-contain  drop-shadow-2xl cursor-pointer' alt="" />
            </div>
            
            {openChat && (
                <div>
                <div className='fixed w-[300px] h-[300px] bg-[#fff] z-[100] rounded-3xl right-2 bottom-28 overflow-hidden chatBox'>
                    <div className=' flex justify-center items-center gap-10 px-2 py-2 bg-[#095E54] rounded-t-3xl'>
                        <div>
                            <img src={logo} alt="" className='w-auto h-[50px] object-contain drop-shadow-2xl bg-white rounded-full p-1 WhatsappDp' />
                        </div>
                        <div>
                            <div className='text-xl titleText2 text-[#fff]'>
                                Hyper City
                            </div>
                            <div className=' text-[10px] text-[#aa9c9c]'>Typically replies within an hour</div>
                        </div>
                        <div>
                            <IoClose onClick={() => setOPenChat(!openChat)} className=' text-[#aa9c9c] cursor-pointer'/>
                        </div>
                    </div>

                <div className='relative'>
                    <img src={chatBg} alt="" />
                    <div className=' absolute top-0 drop-shadow-md left-0 h-[190px] w-[68%]'>
                        <img src={messageBox} className='w-full h-full object-contain' alt="" />
                        <div className=' absolute top-12 font-bold titleText text-[#999393] pl-10 drop-shadow-sm'>
                            <div className=' text-[13px]'>Hyper city</div>
                            <div className=' flex items-center gap-3 text-[#554f4f]'>Hi there <span><MdWavingHand className='text-[#ffb909] drop-shadow-md'/></span></div>
                            <div className=' text-[#554f4f] text-[15px] leading-tight mt-2'>How can I help you?</div>
                        </div>
                    </div>
                </div>

                <div className=' absolute bottom-0 w-full h-[60px] bg-[#fff]'>
                    <div className=' flex justify-center mt-3'>
                        
                        <button className='bg-[#00ff15] px-8 py-1 text-[#fff] font-bold titleText2 rounded-3xl shadow-md flex justify-center items-center gap-2'><span className='text-xl'><FaWhatsapp/></span>Start Now</button>
                    </div>
                </div>

                </div>
            </div>
            )}

            <div>
                <Carousel/>
            </div>

            {/* Offer Section */}
            <section>
                <OfferSection/>
            </section>

            {/* About Section */}
            <section>
                <div>
                    {/* About Background */}
                    <img src="" alt="" />
                </div>
                <div className=' lg:max-w-[1200px] lg:mx-auto'>
                    <div className=' px-6 py-10 lg:flex lg:gap-10 lg:justify-center lg:items-center'>
                        {/* Left */}
                        <div className='aboutImg mx-auto BlobDesign lg:h-[400px] lg:w-[400px]'>
                            <img src={aboutImg} className='w-full h-full object-cover rounded-full' alt="" />
                        </div>

                        {/* Right */}
                        <div className='lg:w-[50%]'>
                            <div className='titleText font-bold mb-2 text-[#FF6C00]'>About Us</div>
                            <div className='titleText2 font-bold text-[36px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing</div>
                            <div className='paraText mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem corrupti ipsum! Explicabo ad, cupiditate nisi voluptatibus deleniti harum incidunt eius tempora excepturi reiciendis nihil et! Aperiam fuga vitae magnam.
                            Cupiditate in omnis cumque, quae dolorem velit nesciunt consequatur, quibusdam laborum aperiam possimus molestias enim sapiente. Atque tempora itaque totam. Totam perspiciatis tempore non blanditiis atque et accusantium voluptas laborum.
                            </div>
                            <div>
                                <button className='titleText font-bold px-8 py-2 rounded-3xl bg-[#FF6C00] text-[#fff] buttonShadow'>Read More</button>
                            </div>
                            <div className=' mt-10 flex justify-center items-center text-center'>
                                <div className='md:flex md:justify-center md:items-center'>
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
                    <div className=' px-6 lg:max-w-[1200px] lg:mx-auto  z-10 md:flex md:flex-row-reverse md:gap-10 py-10'>
                        {/* Left */}
                        <div>
                            <div className='titleText2 font-bold text-[44px] mb-5 leading-tight text-[#fff] drop-shadow-sm md:text-center'>Our Mission & Vision</div>
                            <div className=' w-full h-[200px] relative overflow-hidden mb-10 hidden md:flex'>
                                <img src={missionVision} className='main-image absolute top-0 left-0 w-full h-full object-cover shadow-2xl drop-shadow-2xl' alt="" />
                                {/* <img src={brushFrame} className=' brush-frame absolute top-0 left-0 w-full h-full object-cover ' alt="" /> */}
                            </div>
                        </div>

                        {/* Right */}
                        <div className='md:w-[50%]'>
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
                    <div className=' absolute bottom-[-10px] left-0 right-0 lg:hidden'>
                        <img src={bottomPart} className=' w-full h-full object-cover ' alt="" />
                    </div>
                </div>
            </section>

            <section>
                <div className='flex justify-center items-center mb-10'>
                    <div className=' px-6 lg:max-w-[1200px] lg:mx-auto'>
                        <div className='titleText2 font-bold text-[44px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm md:text-center'>Our Products</div>
                        <div className='paraText mb-10 md:text-center lg:px-56'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laborum optio nesciunt eius officiis ea, voluptate impedit veniam dolorum labore cum excepturi asperiores nihil tempore sequi adipisci perspiciatis laudantium? Officiis?
                        Optio eos accusamus dicta facilis ducimus reiciendis maiores, repudiandae minus quis, at perspiciatis. Nam impedit quaerat tenetur. Ullam commodi perferendis laudantium illum veniam molestiae sint, repellendus aliquid assumenda blanditiis ab.
                        </div>

                        {/* Product List */}
                        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-10'>
                            <div className=' w-full h-[300px] productBox'>
                                <div className='w-auto h-[200px]'>
                                    <img src={product5} className='h-full w-full object-contain drop-shadow-2xl' alt="" />
                                </div>
                                <div className=' flex flex-col justify-center items-center titleText2'>
                                    <div className='text-xl text-[#FF6C00] drop-shadow-sm'>Masala Lays Chips</div>
                                    <div className='text-sm titleText mt-1'>Lorem ipsum dolor sit amet.</div>
                                </div>
                            </div>
                            <div className=' w-full h-[300px] productBox'>
                                <div className='w-auto h-[200px]'>
                                    <img src={product5} className='h-full w-full object-contain drop-shadow-2xl' alt="" />
                                </div>
                                <div className=' flex flex-col justify-center items-center titleText2'>
                                    <div className='text-xl text-[#FF6C00] drop-shadow-sm'>Masala Lays Chips</div>
                                    <div className='text-sm titleText mt-1'>Lorem ipsum dolor sit amet.</div>
                                </div>
                            </div>
                            <div className=' w-full h-[300px] productBox'>
                                <div className='w-auto h-[200px]'>
                                    <img src={product5} className='h-full w-full object-contain drop-shadow-2xl' alt="" />
                                </div>
                                <div className=' flex flex-col justify-center items-center titleText2'>
                                    <div className='text-xl text-[#FF6C00] drop-shadow-sm'>Masala Lays Chips</div>
                                    <div className='text-sm titleText mt-1'>Lorem ipsum dolor sit amet.</div>
                                </div>
                            </div>
                            <div className=' w-full h-[300px] productBox'>
                                <div className='w-auto h-[200px]'>
                                    <img src={product5} className='h-full w-full object-contain drop-shadow-2xl' alt="" />
                                </div>
                                <div className=' flex flex-col justify-center items-center titleText2'>
                                    <div className='text-xl text-[#FF6C00] drop-shadow-sm'>Masala Lays Chips</div>
                                    <div className='text-sm titleText mt-1'>Lorem ipsum dolor sit amet.</div>
                                </div>
                            </div>
                            <div className=' w-full h-[300px] productBox'>
                                <div className='w-auto h-[200px]'>
                                    <img src={product5} className='h-full w-full object-contain drop-shadow-2xl' alt="" />
                                </div>
                                <div className=' flex flex-col justify-center items-center titleText2'>
                                    <div className='text-xl text-[#FF6C00] drop-shadow-sm'>Masala Lays Chips</div>
                                    <div className='text-sm titleText mt-1'>Lorem ipsum dolor sit amet.</div>
                                </div>
                            </div>
                            <div className=' w-full h-[300px] productBox'>
                                <div className='w-auto h-[200px]'>
                                    <img src={product5} className='h-full w-full object-contain drop-shadow-2xl' alt="" />
                                </div>
                                <div className=' flex flex-col justify-center items-center titleText2'>
                                    <div className='text-xl text-[#FF6C00] drop-shadow-sm'>Masala Lays Chips</div>
                                    <div className='text-sm titleText mt-1'>Lorem ipsum dolor sit amet.</div>
                                </div>
                            </div>
                            <div className=' w-full h-[300px] productBox'>
                                <div className='w-auto h-[200px]'>
                                    <img src={product5} className='h-full w-full object-contain drop-shadow-2xl' alt="" />
                                </div>
                                <div className=' flex flex-col justify-center items-center titleText2'>
                                    <div className='text-xl text-[#FF6C00] drop-shadow-sm'>Masala Lays Chips</div>
                                    <div className='text-sm titleText mt-1'>Lorem ipsum dolor sit amet.</div>
                                </div>
                            </div>
                            <div className=' w-full h-[300px] productBox'>
                                <div className='w-auto h-[200px]'>
                                    <img src={product5} className='h-full w-full object-contain drop-shadow-2xl' alt="" />
                                </div>
                                <div className=' flex flex-col justify-center items-center titleText2'>
                                    <div className='text-xl text-[#FF6C00] drop-shadow-sm'>Masala Lays Chips</div>
                                    <div className='text-sm titleText mt-1'>Lorem ipsum dolor sit amet.</div>
                                </div>
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
                    <div className=' px-6 lg:w-[1200px] lg:mx-auto'>
                        <div className='titleText2 font-bold text-[44px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm text-center'>Why People Choose Hyper City</div>
                        <div className='paraText mb-10 text-center lg:px-56'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In animi corporis minima molestias sint molestiae labore necessitatibus, qui inventore assumenda, rem dolore consequuntur quis commodi, dolorum porro natus magnam amet.
                        </div>
                    </div>
                    <div className='px-6 lg:max-w-[1200px] lg:mx-auto md:flex md:justify-center md:items-center md:gap-10'>

                        {/* Left */}

                        <div className='mb-10 flex justify-center items-center'>
                            <div className=' w-[300px] h-[300px] BlobDesign choseUs bg-[#0cd50f] lg:w-[500px] lg:h-[500px]'>
                                <img src={choseUs} className='w-full h-full object-cover rounded-full' alt="" />
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

            <section className='mb-10 md:px-10 lg:max-w-[1200px] lg:mx-auto'>
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
                       <img src={MartBg} className=' w-full h-full object-cover md:opacity-80 md:blur-[2px]' alt="" />
                    </div>
                    <div className=' absolute top-0 left-0 right-0 bottom-0 -z-10'>
                        <img src={blackShade} className=' w-full h-full object-cover' alt="" />
                    </div>
                    <div className='md:flex justify-center items-center w-full px-6 lg:max-w-[1200px] lg:mx-auto py-10 md:gap-10'>
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

            <section>
                <Footer/>
            </section>
        </div>
    );
};

export default Home;
