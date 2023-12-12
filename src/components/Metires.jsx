/* eslint-disable react/no-unescaped-entities */
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import chanel1 from '../assets/Chanel1.webp';
import chanel2 from '../assets/Chanel2.webp';
import chanel3 from '../assets/Chanel3.webp';
import chanel4 from '../assets/Chanel4.webp';

const Metires = () => {
    return (
        <div>
            
            <HorizontalScrollCarousel />
           
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0.2, 1], ["4%", "-77%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-BlackBG z-10">
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
                    <div className="metires-content sm:w-[1200px]">
                        
                        <p className=" p-8 w-[390px] sm:w-[1200px] text-[12px] sm:text-[36px] font-black uppercase text-Offwhite  text-center">
                        ALIVE WITH A VIBRANT POP SPIRIT BORN IN MANCHESTER AND KEPT ALIVE ACROSS THE DECADES, THE CHANEL 2023/34 MÉTIERS D’ART SHOW EMBRACES THE CREATIVE DIALOGUE BETWEEN GREAT BRITAIN AND THE HOUSE, SO DEAR TO GABRIELLE CHANEL AND TODAY TO ARTISTIC DIRECTOR OF THE FASHION COLLECTIONS, VIRGINIE VIARD. A TESTIMONY TO THE ARTISANAL PRECISION OF THE MÉTIERS D’ART, THE COLLECTION SHIMMERS AND SHINES WITH PLAYFUL NODS TO BRITISH MUSIC CULTURE AND CHANEL'S ART OF TAILORING. CONTRASTING AUTUMNAL AND VIVID COLOURS, ENCRUSTED TEXTURES, PURE SILHOUETTES AND CAREFREE ATTITUDES INVOKE A SOFT YET AUDACIOUS FEMININITY.
                        </p>
                        
                    </div>

                    
                </motion.div>
            </div>
        </section>
    );
};



export default Metires;

