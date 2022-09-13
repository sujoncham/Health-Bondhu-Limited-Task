import React from 'react';
import { Link } from 'react-router-dom';
import SocialItems from '../SharedComponents/SocialItems';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{background:'#cfdcf4'}} className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className='mt-5'>
                            <div>
                                <span className='logo-text-one'>Doc</span> 
                                <span className='logo-text-two'>mic.</span>
                            </div>
                            <p className='mt-3 mb-4 my-color'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee</p>
                            <SocialItems />
                        </div>
            
                    </div>
                    <div className="col-md-6">
                        <h4 className='mt-5 mx-4 text-color'>Quick Links</h4>
                        <div className="row">
                            <div className="col-sm-6 col-md-6">
                                <ul className='foot-nav'>
                                    <li><Link to="/">About us</Link></li>
                                    <li><Link to="/">Our Pricing</Link></li>
                                    <li><Link to="/">Our Gallery</Link></li>
                                    <li><Link to="/">Appointment</Link></li>
                                    <li><Link to="/">Privacy Policy</Link></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <ul className='foot-nav'>
                                    <li><Link to="/">Services</Link></li>
                                    <li><Link to="/">Our Doctors</Link></li>
                                    <li><Link to="/">Our Latest News</Link></li>
                                    <li><Link to="/">Careers</Link></li>
                                    <li><Link to="/">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-3">
                        <h4 className='mt-5 text-color'>Opening Hours</h4>
                        <div className='time-text'>
                            <div className='d-flex justify-content-start gap-3'>
                                <span className='dayswidth'>Mon - Tue</span>
                                <span>8.00AM - 5.00PM</span>
                            </div>
                            <div className='d-flex justify-content-start gap-3'>
                            <span className='dayswidth'>Wed - Thu</span>
                                <span>8.00AM - 5.00PM</span>
                            </div>
                            <div className='d-flex justify-content-start gap-3'>
                            <span className='dayswidth'>Fri - Sat</span>
                                <span>8.00AM - 5.00PM</span>
                            </div>
                            <div className='d-flex justify-content-start gap-3'>
                            <span className='dayswidth'>Sunday</span>
                                <span>Emergency Only</span>
                            </div>
                            <div className='d-flex justify-content-start gap-3'>
                            <span className='dayswidth'>Personal</span>
                                <span>Mon - 5.00PM</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <p className='mt-4 mb-4'>Copyright @222 Medicom All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;