import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import chanel1 from '../assets/Chanel1.webp';
import chanel2 from '../assets/Chanel2.webp';
import chanel3 from '../assets/Chanel3.webp';
import chanel4 from '../assets/Chanel4.webp';

const Metires = () => {
    return (
        <div className="bg-neutral-800">
            <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                    Scroll down
                </span>
            </div>
            <HorizontalScrollCarousel />
            <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                    Scroll up
                </span>
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0.2, 1], ["6%", "-76%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12 items-center justify-center">
                    <div className="metires-content w-[1200px]">
                        <p className="font-Pencerio text-5xl">2023/24</p>
                        <p className=" p-8 text-[128px] font-black uppercase text-Offwhite ">
                            Métiers d'Art
                        </p>
                        <p className="font-Pencerio text-5xl text-right">by Virginie Viard</p>
                    </div>
                    <div className="metires-content w-[1400px]">
                        <img src={chanel1} alt="" className="rounded-3xl" />
                    </div>
                    <div className="metires-content w-[1400px]">
                    <img src={chanel2} alt="" className="rounded-3xl" />
                    </div>
                    <div className="metires-content w-[594px]">
                    <img src={chanel3} alt="" className="rounded-3xl" />
                    </div>
                    <div className="metires-content w-[594px]">
                    <img src={chanel4} alt="" className="rounded-3xl" />
                    </div>
                    <div className="metires-content w-[1200px]">
                        
                        <p className=" p-8 text-[40px] font-black uppercase text-Offwhite  text-center">
                        ALIVE WITH A VIBRANT POP SPIRIT BORN IN MANCHESTER AND KEPT ALIVE ACROSS THE DECADES, THE CHANEL 2023/34 MÉTIERS D’ART SHOW EMBRACES THE CREATIVE DIALOGUE BETWEEN GREAT BRITAIN AND THE HOUSE, SO DEAR TO GABRIELLE CHANEL AND TODAY TO ARTISTIC DIRECTOR OF THE FASHION COLLECTIONS, VIRGINIE VIARD. A TESTIMONY TO THE ARTISANAL PRECISION OF THE MÉTIERS D’ART, THE COLLECTION SHIMMERS AND SHINES WITH PLAYFUL NODS TO BRITISH MUSIC CULTURE AND CHANEL'S ART OF TAILORING. CONTRASTING AUTUMNAL AND VIVID COLOURS, ENCRUSTED TEXTURES, PURE SILHOUETTES AND CAREFREE ATTITUDES INVOKE A SOFT YET AUDACIOUS FEMININITY.
                        </p>
                        
                    </div>

                    {/* {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })} */}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[800px] w-[1340px] overflow-hidden"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">

            </div>
        </div>
    );
};

export default Metires;

const cards = [
    {
        url: "../assets/Chanel1.webp",
        title: "Métiers d'Art",
        id: 1,
    },
    {
        url: "../assets/Chanel1.webp",
        title: "Title 2",
        id: 2,
    },
    {
        url: "../assets/Chanel1.webp",
        title: "Title 3",
        id: 3,
    },
    {
        url: "/imgs/abstract/4.jpg",
        title: "Title 4",
        id: 4,
    },
    {
        url: "/imgs/abstract/5.jpg",
        title: "Title 5",
        id: 5,
    },
    {
        url: "/imgs/abstract/6.jpg",
        title: "Title 6",
        id: 6,
    },
    {
        url: "/imgs/abstract/7.jpg",
        title: "Title 7",
        id: 7,
    },
];