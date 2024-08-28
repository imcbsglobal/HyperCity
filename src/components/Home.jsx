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
import brushFrame from "../assets/brush-frame.png"
import missionVision from "../assets/mission-vision.jpg"

import choseUs from "../assets/chose-us.jpg"

import offerBg from "../assets/offer-bg.jpg"
import offerCoverBg from "../assets/offer-cover-bg.png"
import customer from "../assets/customer.png"
import ProductCarousel from './ProductCarousel';
import OfferPosters from './OfferPosters';
import Vegitables from './categoryList/Vegitables';
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";



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
        <div className='overflow-hidden'>
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
                        
                        <button className='bg-[#01af10] px-8 py-1 text-[#fff] font-bold titleText2 rounded-3xl shadow-md flex justify-center items-center gap-2'><span className='text-xl'><FaWhatsapp/></span>Start Now</button>
                    </div>
                </div>

                </div>
            </div>
            )}

            <div>
                <Carousel/>
            </div>

            {/* Offer Section */}
            <section className=' relative '>
                <div className='mb-5'>
                    <ProductCarousel className=""/>
                </div>
                {/* <OfferSection/> */}
                <div>
                    <OfferPosters className=""/>
                    <div className=' mt-10 flex justify-center items-center'>
                        <Link to='/products'>
                            <button className='px-8 py-3 rounded-3xl text-sm titleText font-bold bg-[#FF6C00] text-[#fff]'>View More </button>
                        </Link>
                    </div>
                </div>

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
                        <motion.div
                        initial={{scale:0, opacity:0}} 
                        animate={{ scale:1,opacity:1,transition:{duration:1,ease:'backInOut',delay:.2}}}
                        className='aboutImg mx-auto  lg:h-[500px] lg:w-[500px]'>
                            <motion.img src={aboutImg} className='w-full h-full object-cover rounded-full BlobDesign' alt="" />
                        </motion.div>

                        {/* Right */}
                        <div className='lg:w-[50%]'>
                            <div className='titleText font-bold mb-2 text-[#FF6C00]'>About Us</div>
                            <div className='titleText2 font-bold text-[36px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm'>From Market Expertise to the <span className='lg:block'>Success of Hypercity </span></div>
                            <div className=' mb-7'>The Hypercity Hypermarket was established on 2nd May 2019 in Kamblakkad, Wayanad, Kerala. We are committed to providing maximum quality products at minimum prices, drawing on over 20 years of experience in the grocery industry. Noufal KK, who previously expanded into the grocery sector with his brothers in Kannur district, laid the foundation for this venture with a wealth of market knowledge and expertise. The grand opening was inaugurated by Panakkad Sayyid Basheer Ali Shihad Thangal, and the supermarket has since become a trusted name among customers.
                            </div>
                            <div>
                                <Link to='/about'><button className='titleText font-bold px-8 py-2 rounded-3xl bg-[#FF6C00] text-[#fff] buttonShadow'>Read More</button></Link>
                            </div>
                            <div className=' mt-10 flex justify-center items-center text-center'>
                                <div className='md:flex md:justify-center md:items-center'>
                                    <div className='p-2'>
                                        <div className='titleText1 text-[48px] text-[#0cd50f] drop-shadow-md'>10+</div>
                                        <div className='titleText font-bold text-[#0cd50f]'>Years Of Trust</div>
                                    </div>
                                    <div className='p-2'>
                                        <div className='titleText1 text-[48px] text-[#0cd50f] drop-shadow-md'>300+</div>
                                        <div className='titleText font-bold text-[#0cd50f]'>Employees</div>
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
                            <div className=' w-full h-[200px] relative overflow-hidden mb-10 hidden md:flex lg:h-[330px]'>
                                <img src={missionVision} className='main-image absolute top-0 left-0 w-full h-full object-cover shadow-2xl drop-shadow-2xl' alt="" />
                                {/* <img src={brushFrame} className=' brush-frame absolute top-0 left-0 w-full h-full object-cover ' alt="" /> */}
                            </div>
                        </div>

                        {/* Right */}
                        <div className='md:w-[50%]'>
                            {/* Mission */}
                            <div className=' mb-10'>
                                <div className='titleText font-bold text-[32px] mb-5 leading-tight text-[#fff] drop-shadow-sm'>Our Mission</div>
                                <div className='paraText text-[#fff]'>To provide the community with fresh, high-quality products at competitive prices while delivering exceptional customer service. The supermarket aims to be a trusted local provider, ensuring that every shopping experience is convenient, enjoyable, and fulfilling, because at our supermarket, we stand for “Quality You Can Trust</div>
                            </div>

                            {/* Vision */}
                            <div>
                                <div className='titleText font-bold text-[32px] mb-5 leading-tight text-[#fff] drop-shadow-sm'>Our Vision</div>
                                <div className='titleText paraText text-[#fff]'>To become the leading supermarket chain in the region, known for its commitment to quality, customer satisfaction, and community support. The goal is to expand further, bringing our unique shopping experience to more neighbourhoods while maintaining the highest standards of service and product selection.</div>
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
                    <div className=' px-6 lg:mx-auto'>
                        <div className='titleText2 font-bold text-[44px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm md:text-center'>Our Products</div>
                        <div className='paraText mb-10 md:text-center lg:px-56'>Discover a wide array of high-quality items at our store, from fresh produce to a variety of essential groceries and more. Each selection is carefully chosen to ensure exceptional quality and reflect our commitment to delivering outstanding customer satisfaction. Built on years of market expertise and trust, our offerings are designed to provide you with convenience and excellence in every purchase. Explore our collection and enjoy a superior shopping experience.
                        </div>
                        {/* Product List */}

                        <Vegitables/>
                        
                        <div className='flex justify-center mt-10 items-center'>
                            <Link to='/products'>
                                <button className='px-8 py-2 rounded-3xl  buttonShadow text-[#fff] bg-[#FF6C00] titleText font-bold text-sm'>View More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=' mb-10'>
                    <div className=' px-6 lg:w-[1200px] lg:mx-auto'>
                        <div className='titleText2 font-bold text-[44px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm text-center'>The Values We Live By</div>
                        <div className='paraText mb-10 text-center lg:px-56'>At Hyper City, we prioritize our customers by delivering excellent service and high-quality products. We uphold integrity with honesty and transparency in all we do, and we stay committed to supporting our community. Through continuous innovation, we evolve to meet our customers' needs while maintaining the quality they trust.
                        </div>
                    </div>
                    <div className='px-6 lg:max-w-[1200px] lg:mx-auto md:flex md:justify-center md:items-center md:gap-10'>

                        {/* Left */}

                        <div className='mb-10 flex justify-center items-center'>
                            <div className=' w-[300px] h-[300px]  choseUs  lg:w-[500px] lg:h-[500px]'>
                                <img src={choseUs} className='w-full h-full object-cover rounded-full BlobDesign' alt="" />
                            </div>
                        </div>

                        {/* Right */}
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <div className='flex justify-center items-center gap-5 Box px-5 py-3'>
                                <div className='w-auto h-[60px]'>
                                    <img src={cartIcon} className='w-full h-full object-contain drop-shadow-lg' alt="" />
                                </div>
                                <div className=' text-sm'>Customer Focus: Always putting the needs and satisfaction of our customers first.</div>
                            </div>
                            <div className='flex justify-center items-center gap-5 px-5 py-3 Box'>
                                <div className='w-auto h-[60px]'>
                                    <img src={cartIcon} className='w-full h-full object-contain drop-shadow-lg' alt="" />
                                </div>
                                <div className=' text-sm'>Quality: Offering only the best products and maintaining high standards in everything we do.</div>
                            </div>
                            <div className='flex justify-center items-center gap-5 Box px-5 py-3'>
                                <div className=' w-auto h-[60px]'>
                                    <img src={cartIcon} className=' h-full w-full object-contain drop-shadow-lg' alt="" />
                                </div>
                                <div className='text-sm'>Integrity: We conduct business with honesty, transparency, and a steadfast commitment to doing what's right.</div>
                            </div>
                            <div className='flex justify-center items-center gap-5 px-5 py-3 Box'>
                                <div className=' w-auto h-[60px]'>
                                    <img src={cartIcon} className=' h-full w-full object-contain drop-shadow-lg' alt="" />
                                </div>
                                <div className='text-sm'>Community: Supporting and giving back to the local community, fostering strong relationships.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className=' mb-10 overflow-hidden'>
                <div className=' px-6 text-center mb-10 md:flex md:justify-center md:gap-5 md:items-center llg:w-[1400px] mx-auto'>
                    <div className='md:w-[50%] lg:w-[40%] mb-5 lg:mb-0'>
                        <img src={customer} className=' boxShadow' alt="" />
                    </div>
                    <div className='md:w-[50%] lg:w-[60%]'>
                        <div className='text-[42px] mb-5 titleText2 leading-tight text-[#0cd50f]'>Our Customers Love</div>
                        <div className='paraText mb-5 lg:px-20'>Our customers love the exceptional quality and variety we offer in every aspect of our store. From the freshness of our produce to the reliability of our groceries and the thoughtful selection of our other products, we consistently exceed expectations. Our dedication to providing a superior shopping experience, coupled with our years of market expertise, ensures that each visit is met with satisfaction and trust. Discover why our customers keep coming back for more.
                        </div>
                        <Testimonials className="mt-5"/>
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
                       <img src={MartBg} className=' w-full h-full object-cover md:opacity-80 md:blur-[2px] blur-[5px]' alt="" />
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
                                <div className='titleText text-sm text-[#fff] font-light'>We're here to help with any questions or concerns. Reach out to us, and we'll ensure you receive the support and assistance you need. Your satisfaction is our top priority.</div>
                            </div>
                            <div>
                                <div className='mb-2 text-[32px] titleText2 leading-tight text-[#0cd50f]'>Email</div>
                                <div className='mb-5 text-[18px] titleText leading-tight text-[#fff] font-bold'>info@hypercityhypermarket.com</div>
                            </div>
                            <div>
                                <div className='mb-2 text-[32px] titleText2 leading-tight text-[#0cd50f]'>Phone</div>
                                <div className='mb-2 text-[18px] titleText leading-tight text-[#fff] font-bold'>+91 9539336622</div>
                                <div className='mb-5 text-[18px] titleText leading-tight text-[#fff] font-bold'>+91 4936298888</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#FF6C00]'>
                <Footer/>
            </section>
        </div>
    );
};

export default Home;
