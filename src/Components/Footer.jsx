import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import './Styles/Footer.css'
const Footer = () => {
    return (
        <div className='fon text-light' >
            <div className='p-5'>
                <div className='l text-center text-ligh'><span><FacebookIcon  sx={{ fontSize: 70 }} className='px-3'/></span><span><InstagramIcon  sx={{ fontSize: 70 }} className='px-3'/></span><span><TelegramIcon  sx={{ fontSize: 70 }} className='px-3'/></span></div>
                <div className='l text-center text-ligh'> <h3>Univercity of Tashkent - Since 1955 </h3></div>
            </div>
        </div>
    );
}

export default Footer;
