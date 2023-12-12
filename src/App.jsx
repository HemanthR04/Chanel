import Artists from "./components/Artists";
import Intro from "./components/Intro";
import Metires from "./components/Metires";
import Lenis from '@studio-freight/lenis'
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
function App() {
  return ( 
    <>
    <Intro/>
    <Metires/>
    <Artists/>
    </>
   );
}

export default App;