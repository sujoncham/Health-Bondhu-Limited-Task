import React from 'react';
import bgTreat from '../../../assets/Group_10.png';
import treatment from '../../../assets/pose_4.png';

const Treatment = () => {

    const bgtreat = {
        backgroundImage:`url(${bgTreat})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
    }

    return (
        <div className="row">
                <div className="col-md-7">
                    <div>
                        <h4 style={{color:"#642DFF"}}>16+ Years Experiences</h4>
                        <h1>We Are Always ensure Best Medical Treatment For Your Health</h1>
                        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</p>
                      
                    </div>
           
                </div>
                <div className="col-md-5">
                    <div style={bgtreat}>
                    <img className='w-100' src={treatment} alt="treatment" />
                    </div>
                </div>
            </div>
    );
};

export default Treatment;