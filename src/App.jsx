import Artists from "./components/Artists";
import Intro from "./components/Intro";
import Metires from "./components/Metires";
import Lenis from '@studio-freight/lenis';
import { useRef,useEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Jewels from "./components/Jewels";

gsap.registerPlugin(ScrollTrigger);


const lenis = new Lenis()

lenis.on('scroll', () => {
 
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
function App() {
  const ref = useRef(null);
  
    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".wrapper"),
            {
                backgroundColor:"#121212",
                
            },
            {
                backgroundColor:"#FFFFF3",
                
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
     
  return ( 
    <>
    
    <div ref={ref} className="main bg-BlackBG text-black">
      <div className="wrapper ">
    
    <Intro/>
    <Metires/>
    <Artists />
    {/* <Jewels/> */}
    
    </div>
    </div>
    </>
   );
}

export default App;