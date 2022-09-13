import React from 'react';
import { Carousel } from 'react-bootstrap';
import character from '../../../assets/character.png';
import banner from '../../../assets/pose_2.png';
import pose from '../../../assets/pose_4.png';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <div className="row mt-5 mb-5">
            <div className="col-md-12 text-center mt-5 mb-5">
                <h5 style={{color:"#642DFF"}}>Testimonial</h5>
                <h1>What they say?</h1>
            </div>
                <div className="d-flex justify-content-center mb-5">
                    <div className="col-md-6 col-md-offset-3 bg-slider">
              
                    <Carousel>
                        <Carousel.Item>
                            <div className="row">
                            <div className="col-md-8">
                                    
                                    <h3 className='text-dark'>David Jeams2</h3>
                                    <h3 className='text-dark'>Pratient</h3>
                                    <p className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, tenetur, magnam rem qui, similique cumque quaerat autem libero soluta quidem nobis odit atque ipsum modi obcaecati laudantium possimus! Ipsa, blanditiis.</p>
                                    
                                </div>
                                <div className="col-md-4">
                                    <img className="d-block w-100" src={character} alt="Third slide" />
                                </div>
                            </div>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-md-8">
                                    
                                    <h3 className='text-dark'>David Jeams2</h3>
                                    <h3 className='text-dark'>Pratient</h3>
                                    <p className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, tenetur, magnam rem qui, similique cumque quaerat autem libero soluta quidem nobis odit atque ipsum modi obcaecati laudantium possimus! Ipsa, blanditiis.</p>
                                    
                                </div>
                                <div className="col-md-4">
                                <img className="d-block w-100" src={banner} alt="Third slide" />
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row">
                            <div className="col-md-8">
                                    
                                    <h3 className='text-dark'>David Jeams2</h3>
                                    <h3 className='text-dark'>Pratient</h3>
                                    <p className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, tenetur, magnam rem qui, similique cumque quaerat autem libero soluta quidem nobis odit atque ipsum modi obcaecati laudantium possimus! Ipsa, blanditiis.</p>
                                    
                                </div>
                                <div className="col-md-4">
                                <img className="d-block w-100" src={pose} alt="Third slide" />
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
    
                </div>
            </div>
            
        </div>
    );
};

export default Testimonial;