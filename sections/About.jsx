'use client';

import { motion } from "framer-motion";

import styles from '../styles/styles';
import { TypingText } from '../components/CustomTexts';
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
    <section className={ `${ styles.padding } relative z-10` }>
        <div className="gradient-02 z-0"/>
        <motion.div
            variants={ staggerContainer }
            initial="hidden"
            whileInView="show"
            viewport={ { once: false, amount: 0.25 } }
            className={ 
                `${ styles.innerWidth } mx-auto
                ${ styles.flexCenter } flex-col` 
                }
            >
            <TypingText 
                title="| About Devbhoomi Software"
                textStyles="text-center"
            />

            <motion.p
                variants={ fadeIn('up', 'tween', 0.2, 1) }
                className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-ChineseSilver"
            >
                <span className="font-extrabold text-white">Blockchain Company</span> 
                
                was founded in 2022 with the blessings of Gita Press & Sanatan Developers , with the aim to help the current and future generations connect with the rich Hindu cultural heritage. In the world full of  
                
                <span className="font-extrabold text-white"> misinformation </span>
                
                of today, we want to bring the age old wisdom 
                
                <span className="font-extrabold text-white"> mainstream </span>
                
                on all devices where you can easily explore a Metaverse / VR / AR world you want, to turn your imagination into reality. Let's 
                
                <span className="font-extrabold text-white"> explore </span>
                
                the beauty of our rich cultural tradition with Devbhoomi Software
            </motion.p>

            <motion.img
                variants={ fadeIn('up', 'tween', 0.3, 1) }
                src="assets/arrow-down.svg"
                alt="A white arrow pointing down"
                className="w-[18px] h-[28px] object-contain mt-[28px]"
            />
        </motion.div>
    </section>
);

export default About;  