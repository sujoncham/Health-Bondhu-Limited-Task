import React from 'react';

const Footer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div>
                        <h5>Dicmic.</h5>
                        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee</p>
                        <div>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor.</li>
                        </div>
                    </div>
        
                </div>
                <div className="col-md-4">
                    <h1>Links</h1>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">Home</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h1>Opening Hours</h1>
                    <div>
                        <div className='d-flex justify-content-start'>
                            <span>Mon - Tue</span>
                            <span>8.00AM - 5.00PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;