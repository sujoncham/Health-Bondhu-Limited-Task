import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import doctorImg from '../../assets/doctors.png';

const FreeConsult = () => {

    const [consultants, setConsultants] = useState([])

    useEffect(()=>{
        const getData = async()=>{
            const res = await fetch('http://localhost:5000/doctorsfree');
            const data = await res.json();
            setConsultants(data)
        } 
        getData();
    }, [])


    return (
        <div className='container py-5'>
            <div className="row">
                <h1>consultants: {consultants.length}</h1>
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={doctorImg} />
                        <Card.Body>
                            <Card.Title>Dr. Selina Khan</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Free Consultation</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={doctorImg} />
                        <Card.Body>
                            <Card.Title>Dr. Selina Khan</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Free Consultation</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={doctorImg} />
                        <Card.Body>
                            <Card.Title>Dr. Selina Khan</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Free Consultation</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={doctorImg} />
                        <Card.Body>
                            <Card.Title>Dr. Selina Khan</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Free Consultation</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={doctorImg} />
                        <Card.Body>
                            <Card.Title>Dr. Selina Khan</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Free Consultation</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={doctorImg} />
                        <Card.Body>
                            <Card.Title>Dr. Selina Khan</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Free Consultation</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={doctorImg} />
                        <Card.Body>
                            <Card.Title>Dr. Selina Khan</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Free Consultation</Button>
                        </Card.Body>
                    </Card>
                </div>
            
            </div>
            
        </div>
    );
};

export default FreeConsult;