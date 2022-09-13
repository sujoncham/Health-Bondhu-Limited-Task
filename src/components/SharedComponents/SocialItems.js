import React from 'react';
import { FaFacebook, FaGoogle, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialItems = () => {
    return (
        <div style={{color:'#2D89FF'}} className='d-flex justify-content-start align-items-center gap-3 mt-3'>
            <FaFacebook size={30} />
            <FaInstagramSquare size={30} />
            <FaGoogle size={30} />
            <FaTwitter size={30} />
            <FaYoutube size={30} />
            
        </div>
    );
};

export default SocialItems;