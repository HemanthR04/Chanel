import J2 from '../assets/Jennie2.webp'
import J3 from '../assets/Jennie3.webp'
import { useRef,useEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Artists() {
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".jennie"),
            {
                scale:1
            },
            {
                scale:0.8,
                scrollTrigger:{
                    trigger:element.querySelector(".jennie"),
                    start:"top bottom",
                    end:"bottom center ",
                    scrub:true,
                    markers:true
                }
            }
        )
      }, []);

    return (
        <>
            <div ref={ref} className="artist-wrapper relative w-full h-full flex items-center justify-between ">
                <div className="overylay jennie flex flex-col ">

                    <img src={J2} alt="" className='w-1/2' />
                    <img src={J3} alt="" className='w-1/2' />
                </div>
                <p className='text-BlackBG font-semibold text-8xl mx-24' >JENNIE KIM</p>
            </div>
        </>
    );
}

export default Artists;