import PersonalLogo from '../assets/personalLogo.svg'
function Footer() {
    return ( 
        <>
            <footer className="footerWrapper flex items-center justify-between mx-20">
                    <div>
                        <a href="https://bento.me/hemanthramesh"><img src={PersonalLogo} alt="" className='w-[100px] ' /></a>
                    </div>
                    <div className="text-Offwhite my-10">Designed and Developed with ❤️</div>
                    
            </footer>
        </>
     );
}

export default Footer;