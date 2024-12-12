import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {

     const scrollToTop = () => {
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='container footer'>
        <div className="logo"><h1><span>Becode</span> Hardware</h1>
        </div>
        <div className="return-top"><Link 
        className='footlink'
         to="#"
        onClick={scrollToTop}
        >Return to top</Link></div>
        <div className="legal">
            <p>&copy; 2025 <span>Becode Hardware</span>. All rights reserved.</p>
        <ul>
            <li><Link className='footlink' to="/">Privacy Policy</Link></li>
            <li><Link className='footlink' to="/">Terms & Conditions</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Footer