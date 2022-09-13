import React from 'react';
import doctor1 from '../../../assets/Ellipse_6.png';
import doctor2 from '../../../assets/Ellipse_7.png';
import doctor3 from '../../../assets/Ellipse_8.png';
import doctor4 from '../../../assets/Ellipse_9.png';
import banner from '../../../assets/pose_2.png';
import stick1 from '../../../assets/Rectangle_4.png';
import stick2 from '../../../assets/Rectangle_5.png';
import vector from '../../../assets/Vector.png';
import './Banner.css';

const Banner = () => {


    const meetDoctor = {
        background:'#642DFF', 
        padding:'10px', 
        borderRadius:'8px', 
        width:'320px'
    }

    return (
            <div style={{ marginTop:'80px'}} className="row">
                <div className="col-sm-12 col-md-12 col-lg-5 order-text">
                    <div className='large-device'>
                        <h1>Your <span style={{color: '#2D89FF'}}>Health</span> Is Our <br />
                         Top <span style={{color: '#642DFF'}}>Priority</span></h1>
                        <p>There are many variations of passages of lpsum available, but the majority hae suffered.</p>
                        <div className='mt-5 mb-5'>
                            <button className='btn btn-primary h1 px-5 py-3'>Meet Our Specialit</button>
                        </div>
                    </div>
                    <div className='mt-5 d-flex justify-content-center align-items-center'>
                        <div className="static-data">
                            <h3 style={{color:'#642DFF'}}>262k+</h3>
                            <p>Recovered Patients</p>
                        </div>
                        <div className="static-data">
                            <h3 style={{color:'#642DFF'}}>96%</h3>
                            <p>Satisfaction Rate</p>
                        </div>
                        <div className="static-data">
                            <h3 style={{color:'#642DFF'}}>86+</h3>
                            <p>Experts Doctors</p>
                        </div>
                       
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-7 position-relative order-image">
                        <div className='bgImage d-flex justify-content-center align-items-center'>
                            <img src={banner} className='w-75' alt="banner" />
                        </div>
                        <div className="d-flex justify-content-start align-items-center position-absolute checkup">
                            <img style={{width:'30px', marginTop:'5px'}} src={vector} alt="vector" />
                            <h6 className='text-white'>Regular Checkup</h6>
                        </div>
                        <div style={meetDoctor} className='position-absolute bottom-0 end-0'>
                            <h4 className='text-white'>Meet Our Doctors</h4>
                            <div className='d-flex justify-content-start align-items-center p-2'>
                                <img className='doctors' src={doctor1} alt="doctor1" />
                                <img className='doctors' src={doctor2} alt="doctor2" />
                                <img className='doctors' src={doctor3} alt="doctor3" />
                                <img className='doctors' src={doctor4} alt="doctor4" />
                                <div style={{width:'50px', height:'50px'}} className='bg-primary rounded-circle d-flex justify-content-center align-items-center position-relative'>
                                    <div className='stick-one'></div>
                                    <div className='stick-two'></div>
                                    
                                </div>
                            </div>
                            <div>
                                <img src={stick1} alt="stick1" />
                                <img src={stick2} alt="stick2" />
                            </div>
                        </div>
                    
                </div>
            </div>
    );
};

export default Banner;