
import React, { useEffect, useState } from 'react';
import appointment from '../../../assets/pose_7.png';
import './Appointment.css';

const Appointment = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const getData = async() =>{
            const res = await fetch('appointment.json');
            const result = await res.json();
            setData(result);
        }
        getData();
    }, [])
   
    return (
        <div className="row mt-5">
                <div className="col-sm-12 col-md-5 col-lg-5 order-text">
                    <div className='bgAppoint mt-5'>
                        <img className='w-100' src={appointment} alt="" />
                    </div>
                    
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7 order-image">
                    <div className="col-md-12 mt-5">
                        <h5 style={{color:"#642DFF"}}>Our Hospital Feature</h5>
                        <h1>Make An Appointment Easy And Fast Services</h1>
                    </div>
                    <div className="row">
                        
                            {
                            data.map(appoint => <div key={appoint.id} className="col-md-6">
                                <div className='bg-white p-3 mt-3 rounded'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h5>{appoint.title}</h5>
                                        <span className='bg-appoint d-flex justify-content-center align-items-center'>
                                            <img src={appoint.img} alt="" />
                                        </span>
                                    </div>
                                    <p>{appoint.descrip}</p>
                                </div>
                            </div>
                            )
                            }
                        
                    
                    </div>
                </div>
            </div>
    );
};

export default Appointment;