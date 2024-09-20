import React from 'react'
import silverTea from "../assets/silver-tea.png"
import logoT from "../assets/logo-t.png"
import oatrin from "../assets/oatrin.png"
import hl from "../assets/hl-logo.png"
import wayanadanCoffee from "../assets/wayanadan-coffee.png"
import brand1 from "../assets/brand1.png"
import brand2 from "../assets/brand2.jpg"
import brand3 from "../assets/brand3.png"
import brand4 from "../assets/brand4.png"
import brand5 from "../assets/brand5.png"
import brand6 from "../assets/brand6.png"
import brand7 from "../assets/brand7.png"
import brand8 from "../assets/brand8.png"
import brand9 from "../assets/brand9.png"
import brand10 from "../assets/brand10.png"
import brand11 from "../assets/brand11.png"
import brand12 from "../assets/brand12.png"
import brand14 from "../assets/brand14.jpeg"
import brand15 from "../assets/brand15.png"
import brand16 from "../assets/brand16.png"
import brand17 from "../assets/brand17.png"
import brand18 from "../assets/brand18.png"
import brand19 from "../assets/brand19.png"
import brand20 from "../assets/brand20.jpg"
import brand21 from "../assets/brand21.png"
import brand22 from "../assets/brand22.png"
import brand23 from "../assets/brand23.png"
import brand24 from "../assets/brand24.png"
import brand25 from "../assets/brand25.jpg"
import brand26 from "../assets/brand26.png"
import brand27 from "../assets/brand27.png"
import brand28 from "../assets/brand28.jpeg"
import brand29 from "../assets/brand29.png"
import brand30 from "../assets/brand30.png"
import brand31 from "../assets/brand31.jpeg"
import brand32 from "../assets/brand32.png"
import brand33 from "../assets/brand33.png"
import brand34 from "../assets/brand34.png"
import brand35 from "../assets/brand35.png"
import brand36 from "../assets/brand36.png"
import brand37 from "../assets/brand38.png"



import { motion } from "framer-motion"


const LogoSlider = () => {
    const logos = [
        { id: 1, src: brand1},
        { id: 2, src: brand2},
        { id: 3, src: brand3},
        { id: 4, src: brand4},
        { id: 5, src: brand5},
        { id: 6, src: brand6},
        { id: 7, src: brand7},
        { id: 8, src: brand8},
        { id: 9, src: brand9},
        { id: 10, src: brand10},
        { id: 11, src: brand11},
        { id: 12, src: brand12},
        { id: 14, src: brand14},
        { id: 15, src: brand15},
        { id: 16, src: brand16},
        { id: 17, src: brand17},
        { id: 18, src: brand18},
        { id: 19, src: brand19},
        { id: 20, src: brand20},
        { id: 21, src: brand21},
        { id: 22, src: brand22},
        { id: 23, src: brand23},
        { id: 24, src: brand24},
        { id: 25, src: brand25},
        { id: 26, src: brand26},
        { id: 27, src: brand27},
        { id: 28, src: brand28},
        { id: 29, src: brand29},
        { id: 30, src: brand30},
        { id: 31, src: brand31},
        { id: 32, src: brand32},
        { id: 33, src: brand33},
        { id: 34, src: brand34},
        { id: 35, src: brand35},
        { id: 36, src: brand36},
        { id: 37, src: brand37},


    ];
    const animationVariants = {
        animate: {
            x: ['0%', '-100%'],
            transition: {
                x: {
                    duration: logos.length * 2, 
                    ease: 'linear',
                    repeat: Infinity,
                },
            },
        },
    };
  return (
    <div className='logo-slider'>
        <motion.div
         className="logo-slider md:gap-[40px] lg:gap-[60px] mix-blend-multiply" variants={animationVariants} animate="animate"
        >
            {logos.map((logo)=>(
                <motion.img
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                key={logo.id}
                src={logo.src} className='logo mix-blend-multiply' alt="" />
            ))}
        </motion.div>
    </div>
  )
}

export default LogoSlider
