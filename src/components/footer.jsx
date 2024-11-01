import { useState } from "react";
import iconIG from '../components/iconosRRSS/iconIG.svg'
import iconLinkedin from '../components/iconosRRSS/iconLinkedin.svg'
import iconTwitter from '../components/iconosRRSS/iconTwitter.svg'
import arrowTop from '../assets/arrowTop.png';

export const Footer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const scrollToSection = (id) => {
        console.log("👀 - scrollToSection - id:", id);
        const element = document.getElementById(id);
        if (element) {
            let yOffset;
            if (isMenuOpen == true) {
                yOffset = -70; // Ajuste de 54px
            } else {
                yOffset = -120; // Ajuste de 54px
            }

            const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };
    return (
        <>
            <footer className='w-full mt-[60px]'>
                <div className="flex items-center justify-center mb-8">
                    <button className="cursor-pointer" onClick={() => scrollToSection('banner')}><img src={arrowTop} /></button>
                </div>
                <div className='border-[#4D4F61] border-b-[3px] border-t-[2px] flex justify-center items-center px-[16px]' >
                    <p className='font-[nunito] text-[11px] font-[700] text-[#4D4F61]'>EZENSE</p>
                    <p className='font-[nunito] text-[11px] font-[700] text-[#4D4F61]'>© 2024</p>
                </div>

                <div className='flex flex-col pt-[16px] gap-[16px]'>

                    <div className='h-[6px] bg-[#4D4F61]'></div>
                    <div className='h-[10px] bg-[#4D4F61]'></div>
                    <div className='h-[16px] bg-callToAction flex items-center justify-center'>
                        <p className='font-[nunito] text-[11px] font-[700] text-white uppercase'>Transforming the Digital Landscape</p>
                    </div>
                    <div className='h-[60px] bg-[#4D4F61] px-[24px] flex items-center justify-between'>
                        <p className='font-[nunito] text-[18px] font-[700] text-white'>This is the end... or not...</p>

                        <div className='flex gap-[8px] items-center'>
                            <a href="https://www.instagram.com/ezense/" target="_blank" rel="noopener noreferrer">
                                <img src={iconIG} />
                            </a>
                            <a href="https://twitter.com/ezenseagency" target="_blank" rel="noopener noreferrer">
                                <img src={iconTwitter} />
                            </a>
                            <a href="https://www.linkedin.com/company/e-zense/" target="_blank" rel="noopener noreferrer">
                                <img src={iconLinkedin} />
                            </a>
                        </div>
                    </div>

                </div>

            </footer>
        </>
    )
}