import React from 'react';
import treatment from '../../../assets/pose_4.png';
import '../Banner/Banner.css';
import './Treatment.css';

const Treatment = () => {


    return (
        <div className="row">
                <div className="col-md-6 mt-5 order-text">
                    <div className='treatment'>
                        <h4>16+ Years Experiences</h4>
                        <h1>We Are Always ensure Best Medical Treatment For Your Health</h1>
                        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</p>
                      
                    </div>
           
                </div>
                <div className="col-md-6 mt-5">
                    <div className='bgtreat d-flex justify-content-center align-items-center order-image'>
                        <img className='w-75' src={treatment} alt="treatment" />
                    </div>
                </div>
            </div>
    );
};

export default Treatment;