import JewelBG from '../assets/JewelBG.webp'

import Jewel2 from '../assets/Jewel2.webp'

import gsap from 'gsap'
import { useRef, useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

function Jewels() {

    const textRef = useRef(null);

    useEffect(() => {
        const element = textRef.current;
        gsap.fromTo(
            element.querySelector(".textL"),
            {
                left: 243,
                opacity: 1,

            },
            {
                left: -320,
                opacity: 0,

                scrollTrigger: {
                    trigger: element.querySelector(".fineJewel"),
                    start: "210px center",
                    end: "300px center ",
                    duration: 10,
                    scrub: true,
                    markers: false
                }
            }
        )
    }, []);
    useEffect(() => {
        const element = textRef.current;
        gsap.fromTo(
            element.querySelector(".textR"),
            {
                right: 160,
                opacity: 1
            },
            {
                right: -320,
                opacity: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".fineJewel"),
                    start: "210 center",
                    end: "300px center ",
                    duration: 10,
                    scrub: true,
                    markers: false
                }
            }
        )
    }, []);
    useEffect(() => {
        const element = textRef.current;
        gsap.fromTo(
            element.querySelector(".fineJewel"),
            {
                right: 160,
                opacity: 1,

            },
            {
                right: -320,
                opacity: 0,

                scrollTrigger: {
                    trigger: element.querySelector(".fineJewel"),
                    start: "0 center",
                    end: "300px center ",
                    duration: 10,
                    scrub: true,
                    markers: false
                }
            }
        )
    }, []);

    return (
        <>
            <div className="w-full h-[350vh] text-BlackBG jewel overflow-hidden  ">
                <div ref={textRef} className="w-full h-screen flex flex-col items-center justify-center relative  ">
                    <p className="text-2xl font-medium text-center m-4 fineJewel " >FINE JEWELLERY</p>
                    <p className="text-8xl font-semibold text-center"><span className='textL absolute top-[50%] right-[51%]'>FIND YOUR </span><span className='textR absolute top-[50%] left-[51%]'>DREAM GIFT</span></p>
                </div>
                <div className="productContent flex  p-10 mx-10 jewelBg relative ">
                    <img src={Jewel2} alt="" className='w-[500px] h-[500px]   sticky' />

                    <div className="ringDescription flex flex-col items-center justify-around">

                        <div className='flex flex-col items-center justify-center text-Offwhite'>
                            <p className=' m-8 text-4xl font-bold text-center'>GIVE WONDER,<br></br>
                                GIVE CHANEL</p>
                            <p className='m-8 text-md font-med'>COCO CRUSH, PREMIÈRE, N°5, CAMÉLIA, J12… LET YOURSELF BE GUIDED TO FIND YOUR DREAM GIFT FROM AMONG THE HOUSE’S WATCHES AND FINE JEWELRY CREATIONS. WHERE 18K BEIGE GOLD OR 18K YELLOW, PINK OR WHITE GOLD* AND DIAMONDS MEET.</p>
                            <button className='border-2  rounded-full font-semibold h-12 w-48 hover:bg-Offwhite hover:text-BlackBG'>SEE MORE</button>
                        </div>
                    </div>
                </div>
                <div className='relative my-40'>
                    <img src={JewelBG} alt="" className='' />
                   
                </div>
            </div>
        </>
    );
}

export default Jewels;