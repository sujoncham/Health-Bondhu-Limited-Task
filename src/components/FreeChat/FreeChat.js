import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../../App.css';
import doctorImg from '../../assets/doctors.png';

const FreeChat = () => {
    const {id} = useParams();
    return (
        <div className='container my-5'>
            <div className="row">

            <h1 className='color2'>Free Chat - {id}</h1>
            <div className='col-md-4 position-relative'>
                <Card>
                    <Card.Img variant="top" src={doctorImg} />
                    <Card.Body>
                        <Card.Title>Dr. Shadhin Rahman</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet consectetur
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div>
                    <h1>Text Sharing</h1>
                </div>
                <div className='d-flex justify-content-start gap-2'>
                    <div className='bg1 p-2 w-50'>
                        <p>Hi</p>
                    </div>
                    <div className='bg2 p-2 w-50'>
                        <p>Hello, Doctor, Are you available</p>
                    </div>
                </div>
                <div className='position-absolute bottom-0 d-flex justify-content-between align-items-center w-100'>
                    <input className='w-75 form-control ' type="text" placeholder='write here' />
                    <button className='btn bg2 w-25 text-white mx-4'>send</button>
                </div>
            </div>
            <div className='col-md-8 position-relative'>
                <img className='w-100' src={doctorImg} alt="" />
                <button className='btn btn-warning text-center m-3 position-absolute top-50 end-50'>Video call</button>
            </div>
            </div>
        </div>
    );
};

export default FreeChat;