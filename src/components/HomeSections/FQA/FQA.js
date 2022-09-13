import React from 'react';
import { FaPlus } from "react-icons/fa";
import myQF from '../../../assets/Group_10.png';
import fqa from '../../../assets/pose_7.png';

const FQA = () => {

    const bgFQA = {
        backgroundImage:`url(${myQF})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <div>
                    <h5 style={{color:"#642DFF"}}>FAQ Questions</h5>
                    <h1>Get Your General Answer</h1>
                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <span>Get Your General Answer</span>
                            <FaPlus />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <span>Get Your General Answer</span>
                            <FaPlus />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <span>Get Your General Answer</span>
                            <FaPlus />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <span>Get Your General Answer</span>
                            <FaPlus />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <span>Get Your General Answer</span>
                            <FaPlus />
                        </div>
                      
                    </div>
                </div>
    
            </div>
            <div className="col-md-6">
                <div style={bgFQA}>
                    <img className='w-100' src={fqa} alt="fqa" />
                </div>
            </div>
        </div>
    );
};

export default FQA;