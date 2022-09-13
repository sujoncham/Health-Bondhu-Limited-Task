import React from 'react';
import Appoint from '../../../assets/Group_10.png';
import appointment from '../../../assets/pose_7.png';

const Appointment = () => {
    const bgAppoint = {
        backgroundImage:`url(${Appoint})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
    }
    return (
        <div className="row mt-5">
                <div className="col-md-5">
                    <div style={bgAppoint}>
                        <img className='w-100' src={appointment} alt="" />
                    </div>
                    
                </div>
                <div className="col-md-7">
                    <div className="col-md-12">
                        <h5 style={{color:"#642DFF"}}>Our Hospital Feature</h5>
                        <h1>Make An Appointment Easy And Fast Services</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className='bg-white p-3 rounded'>
                                <h5>24 Hours Doctor Support</h5>
                                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='bg-white p-3 rounded'>
                                <h5>Exclusive Supports</h5>
                                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className='bg-white p-3 rounded'>
                                <h5>Friendly Environment</h5>
                                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className='bg-white p-3 rounded'>
                                <h5>24 Hours Nurse Support</h5>
                                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Appointment;