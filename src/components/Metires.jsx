/* eslint-disable react/no-unescaped-entities */
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import chanel1 from '../assets/Chanel1.webp';
import chanel2 from '../assets/Chanel2.webp';
import chanel3 from '../assets/Chanel3.webp';
import chanel4 from '../assets/Chanel4.webp';
import Walk from '../assets/Walk.mp4'

const Metires = () => {

   


    return (
        <div>

            <HorizontalScrollCarousel />

        </div>
    );
};

const HorizontalScrollCarousel = () => {

    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".jennie"),
            {
                color:"#FFFFF3"
            },
            {
                color:"#121212",
                scrollTrigger:{
                    trigger:element.querySelector(".jennie"),
                    start:"top bottom",
                    end:"bottom center ",
                    scrub:true,
                    markers:false
                }
            }
        )
      }, []);

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0.2, 1], ["4%", "-77%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]  z-10">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12 items-center justify-center">
                    <div className="metires-content w-[480px] sm:w-[1200px]">
                        <p className="font-Pencerio text-3xl sm:text-5xl">2023/24</p>
                        <p className=" p-8 text-[48px] sm:text-[128px] font-black uppercase text-Offwhite ">
                            Métiers d'Art
                        </p>
                        <p className="font-Pencerio text-3xl sm:text-5xl text-right">by Virginie Viard</p>
                    </div>
                    <div className="metires-content w-[700px] sm:w-[1200px]">
                        <img src={chanel1} alt="" className="rounded-3xl" />
                    </div>
                    <div className="metires-content w-[700px] sm:w-[1200px]">
                        <img src={chanel2} alt="" className="rounded-3xl" />
                    </div>
                    <div className="metires-content w-[505px]">
                        <img src={chanel3} alt="" className="rounded-3xl" />
                    </div>
                    <div className="metires-content w-[505px]">
                        <img src={chanel4} alt="" className="rounded-3xl" />
                    </div>
                    <div ref={ref}  className="metires-content sm:w-[1200px]">
                        
                        <video src={Walk} autoPlay muted loop className="rounded-3xl" />
                        
                    </div>
</motion.div>
            </div>
        </section>
    );
};



export default Metires;

