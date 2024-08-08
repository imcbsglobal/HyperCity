import React from 'react'
import silverTea from "../assets/silver-tea.png"
import logoT from "../assets/logo-t.png"
import oatrin from "../assets/oatrin.png"
import hl from "../assets/hl-logo.png"
import wayanadanCoffee from "../assets/wayanadan-coffee.png"
import { motion } from "framer-motion"


const LogoSlider = () => {
    const logos = [
        { id: 1, src: silverTea},
        { id: 2, src: logoT},
        { id: 3, src: oatrin},
        { id: 4, src: hl},
        { id: 5, src: wayanadanCoffee},
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
         className="logo-slider md:gap-[40px] lg:gap-[60px]" variants={animationVariants} animate="animate"
        >
            {logos.map((logo)=>(
                <motion.img
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                key={logo.id}
                src={logo.src} className='logo' alt="" />
            ))}
        </motion.div>
    </div>
  )
}

export default LogoSlider
