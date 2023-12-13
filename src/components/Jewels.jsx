import Jewel1 from '../assets/Jewel1.jpg'

function Jewels() {
    return (
        <>
            <div className="w-full h-full text-Offwhite jewel">
                <div className="">
                    <p className="text-xl font-medium text-center m-4" >FINE JEWELLERY</p>
                    <p className="text-4xl font-medium text-center">FIND YOUR DREAM GIFT</p>
                </div>
                <div className="productContent flex  p-10 mx-10">
                    <img src={Jewel1} alt="" className='w-[600px] h-[600px] rounded-3xl' />

                    <div className="ringDescription">
                        <p className=' m-8 text-7xl font-semibold'>GIVE WONDER,<br></br>
                            GIVE CHANEL</p>
                        <p className='m-8 text-3xl'>COCO CRUSH, PREMIÈRE, N°5, CAMÉLIA, J12… LET YOURSELF BE GUIDED TO FIND YOUR DREAM GIFT FROM AMONG THE HOUSE’S WATCHES AND FINE JEWELRY CREATIONS. WHERE 18K BEIGE GOLD OR 18K YELLOW, PINK OR WHITE GOLD* AND DIAMONDS MEET.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Jewels;