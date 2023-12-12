import J2 from '../assets/Jennie2.webp'
import J3 from '../assets/Jennie3.webp'



function Artists() {
    
    
    return (  
        <>
            <div   className="artist-wrapper relative w-full h-full flex flex-col items-end">
                <div className="overylay jennie ">
                <p   className='text-black absolute top-[50vh] left-[200px] text-8xl font-semibold  '>JENNIE KIM</p>
                <img src={J2} alt="" className='w-1/2'/>
                <img src={J3} alt="" className='w-1/2'/>
                </div>
            </div>
        </>
    );
}

export default Artists;