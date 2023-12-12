import Intro1 from '../assets/Intro1.png';
import Intro2 from '../assets/Intro2.png'
import Intro3 from '../assets/Intro3.png'
import Reel1 from '../assets/Reel1.mp4'
import Reel2 from '../assets/Reel2.mp4'

function Intro() {
    return ( 
        <>
            <div className="intro-wrapper w-full h-screen flex items-center justify-center">
                <p className="title font-GeneralSans text-[68px] sm:text-[128px] font-semibold">CHANEL</p>
            </div>
            <div className="box1 w-[197px] h-[270px] bg-transparent rounded-2xl absolute top-20 left-48">
            <video src={Reel2} autoPlay muted loop className='object-cover w-full h-full overflow-hidden rounded-2xl'></video>
            </div>
            <div className="box2 w-[192px] h-[200px] bg-transparent rounded-2xl absolute bottom-8 left-[500px]">
                <img src={Intro2} alt="" className='object-cover w-full h-full rounded-2xl' />
            </div>
            <div className="box3 w-[160px] h-[270px] bg-transparent rounded-2xl absolute top-20 right-48">
                <img src={Intro3} alt="" className='object-cover w-full h-full rounded-2xl' />
            </div>
            <div className="box4 w-[100px] h-[100px] bg-Offwhite rounded-2xl absolute bottom-32 left-[300px]"></div>
            <div className="box5 w-[100px] h-[100px] bg-Offwhite rounded-2xl absolute bottom-48 right-[200px]"></div>
            <div className="box6 w-[100px] h-[100px] bg-Offwhite rounded-2xl absolute top-20 left-[500px]"></div>
            <div className="box7 w-[320px] h-[170px] bg-transparent rounded-2xl absolute top-20 right-[540px]">
                <img src={Intro1} alt="" className='object-cover w-full h-full rounded-2xl' />
            </div>
            <div className="box8 w-[280px] h-[140px] bg-transparent rounded-2xl absolute bottom-28 right-[400px]">
            <video src={Reel1} autoPlay muted loop className='object-cover w-full h-full overflow-hidden rounded-2xl'></video>
            </div>
        </>
     );
}

export default Intro;