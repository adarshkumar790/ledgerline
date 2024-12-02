'use client';

import { motion } from "framer-motion";
import styles from "../styles/styles";
import { footerVariants } from "../utils/motion";
import { socials } from "../constants/data"

const Footer = () => (
    <motion.footer
        variants={ footerVariants }
        initial="hidden"
        whileInView="show"
        className={ `${ styles.paddings } py-8 relative` }
    >
        <div className="footer-gradient"/>
        <div className={ `${ styles.innerWidth } flex flex-col gap-8 mx-auto` }>
            <div className="flex flex-wrap items-center justify-between gap-5">
                <span className="font-bold md:text-[64px] text-[44px] text-white">Enter Devbhoomi Concept</span>
                <button className="flex items-center gap-[12px] h-fit py-4 px-6 bg-[#25618b] rounded-[32px]">
                    <img
                        src="/assets/headset.svg"
                        alt="A white icon of a VR headset"
                        className="w-[24px] h-[24px] object-contain"
                    />
                    <span className="font-normal text-[16px] text-white uppercase cursor-pointer">enter devbhoomi concept</span>
                </button>
            </div>

            <div className="flex flex-col">
                <div className="mb-[50px] h-[2px] bg-white opacity-10"/>

                <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="font-extrabold text-[24px] text-white uppercase">devbhoomi software pvt. ltd.</span>
                    <p className="font-normal text-[14px] text-white">Copyright © 2024 Devbhoomi Software. All rights reserved.</p>
                    <div className="flex gap-4">
                        { socials.map((social) => (
                            <img
                                key={social.name}
                                src={social.url}
                                alt={social.name}
                                className="w-[24px] h-[24px] object-contain cursor-pointer"
                            />
                        )) }
                    </div>
                </div>
            </div>

        </div>
    </motion.footer>
);

export default Footer;