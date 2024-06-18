import React from 'react'

import iconIG from  '../components/iconosRRSS/iconIG.svg'
import iconLinkedin from  '../components/iconosRRSS/iconLinkedin.svg'
import iconTwitter from  '../components/iconosRRSS/iconTwitter.svg'

import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
    <footer className='w-full mt-[40px]'>
        <div className='border-[#4D4F61] border-b-[3px] border-t-[2px] flex justify-between items-center px-[16px]' >
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