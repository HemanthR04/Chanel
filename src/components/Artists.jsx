import J2 from '../assets/Jennie2.webp'
import J3 from '../assets/Jennie3.webp'
import J1 from  '../assets/Jennie1.jpg'
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Artists() {
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".jennie"),
            {
                scale: 1
            },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: element.querySelector(".jennie"),
                    start: "top center",
                    end: "bottom center ",
                    scrub: true,
                    markers: false
                }
            }
        )
    }, []);
    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".J1"),
            {
                opacity:1
            },
            {
                opacity:0,
                scrollTrigger: {
                    trigger: element.querySelector(".J2"),
                    start: "top bottom",
                    end: "bottom center ",
                    scrub: true,
                    markers: false
                }
            }
        )
    }, []);
    


    return (
        <>
            <div ref={ref} className="artist-wrapper w-full h-[400vh]">
                <div className="overylay jennie flex flex-col w-full  ">
                <img src={J2} alt="" className=' w-full h-full sticky top-0 -z-10 J1' />
                <img src={J3} alt="" className=' w-full h-full sticky top-0  J2' />
                <img src={J1} alt="" className=' w-full h-full sticky top-0  J3' />
                </div>
            </div>



            
        </>
    );
}

export default Artists;