import Artists from "./components/Artists";
import Intro from "./components/Intro";
import Metires from "./components/Metires";
import Lenis from '@studio-freight/lenis';
import { useRef,useEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Artists2 from "./components/Artists2";
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
                color:"#121212"
            },
            {
                backgroundColor:"#FFFFF3",
                color:"#FFFFF3",
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
    
    <div ref={ref} className="main bg-black text-black">
      <div className="wrapper">
    
    <Intro/>
    <Metires/>
    <Artists />
    <Artists2/>
    
    </div>
    </div>
    </>
   );
}

export default App;