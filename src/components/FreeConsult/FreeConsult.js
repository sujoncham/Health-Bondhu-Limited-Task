import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FreeConsult = () => {

    const [consultants, setConsultants] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const getData = async()=>{
            const res = await fetch('http://localhost:5000/doctorsfree');
            const data = await res.json();
            setConsultants(data)
        } 
        getData();
    }, []);

    const handleConsultant = (id) =>{
        navigate(`/freeConsult/${id}`)
    }


    return (
        <div className='container py-5'>
            <div className="row">
                <h1>consultants: {consultants.length}</h1>
                {
                    consultants.map(consult => <div key={consult.id} className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={consult.img} />
                        <Card.Body>
                            <Card.Title>{consult.name}</Card.Title>
                            <Card.Text>
                            {consult.description}
                            </Card.Text>
                            <Button onClick={() => handleConsultant(consult._id)} variant="primary">Free Consultation</Button>
                        </Card.Body>
                    </Card>
                </div>)
                }
            </div>
            
        </div>
    );
};

export default FreeConsult;