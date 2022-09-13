import React from 'react';
import bgBanner from '../../../assets/Ellipse_5.png';
import doctor1 from '../../../assets/Ellipse_6.png';
import doctor2 from '../../../assets/Ellipse_7.png';
import doctor3 from '../../../assets/Ellipse_8.png';
import doctor4 from '../../../assets/Ellipse_9.png';
import banner from '../../../assets/pose_2.png';
import vector from '../../../assets/Vector.png';
import './Banner.css';

const Banner = () => {

    const bgImage = {
        backgroundImage:`url(${bgBanner})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
    }
    const checkup = {
        background:'#642DFF', 
        padding:'10px', 
        borderRadius:'8px', 
        width:'200px',
        marginLeft:'-30px' 
    }

    const meetDoctor = {
        background:'#642DFF', 
        padding:'10px', 
        borderRadius:'8px', 
        width:'320px'
    }

    return (
            <div style={{ marginTop:'80px'}} className="row">
                <div className="col-md-5">
                    <div>
                        <h1 style={{ fontSize:'60px'}}>Your <span style={{color: '#2D89FF'}}>Health</span> Is Our <br />
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
                <div className="col-md-7">
                    <div style={bgImage} className='position-relative'>
                        <img src={banner} className='w-100' alt="banner" />
                        <div style={checkup} className="d-flex justify-content-start align-items-center position-absolute top-50 start-0">
                            <img style={{width:'30px', marginTop:'5px'}} src={vector} alt="vector" />
                            <h6 className='text-white'>Regular Checkup</h6>
                        </div>
                        <div style={meetDoctor} className='position-absolute bottom-0 end-0'>
                            <h3 className='text-white'>Meet Our Doctors</h3>
                            <div className='d-flex justify-content-start align-items-center p-2'>
                                <img src={doctor1} alt="doctor1" />
                                <img src={doctor2} alt="doctor2" />
                                <img src={doctor3} alt="doctor3" />
                                <img src={doctor4} alt="doctor4" />
                                <div style={{width:'50px', height:'50px'}} className='bg-primary rounded-circle d-flex justify-content-center align-items-center'>
                                    <div style={{width:'5px', height:'40px', background:'#fff'}}></div>
                                    <div style={{width:'40px', height:'5px', background:'#fff'}}></div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Banner;