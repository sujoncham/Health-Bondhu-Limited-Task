import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import myQF from '../../../assets/Group_10.png';
import myexpert from '../../../assets/image_5.png';
import './FQA.css';





const images = [
    {
        id:1,
        title: "What is the purpose of services?",
        img:"https://i.ibb.co/QfQNWyv/pose-2.png"
    },
    {
        id:2,
        title: "Will I always see my own doctors?",
        img:"https://i.ibb.co/g3txLQn/pose-8.png"
    },
    {
        id:3,
        title: "What is one medical's care?",
        img:"https://i.ibb.co/G76X7bK/pose-7.png"
    },
    {
        id:4,
        title: "What is evidence based medicine?",
        img:"https://i.ibb.co/g3txLQn/pose-8.png"
    },
    {
        id:5,
        title: "What is an academic medical center",
        img:"https://i.ibb.co/bvWWD9t/pose-4.png"
    },
]

const FQA = () => {
    const [answer, setAnswer] = useState(images);
    const [show, setShow] = useState(false);
    useEffect(()=>{
        setAnswer(show);

    }, [show])

    const bgFQA = {
        backgroundImage:`url(${myQF})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
    }
 

    return (
        <div className="row mt-5">
            <div className="col-md-12 text-center mb-5">
                    <h5 style={{color:"#642DFF"}}>FAQ Questions</h5>
                    <h1>Get Your General Answer</h1>
                </div>
            <div className="col-md-6">
                {
                    images.map((image) => <div className='mouse-pointer rounded d-flex justify-content-between align-items-center mb-5 p-3' style={{border: show === image ? '5px solid #2D89FF' : '3px solid #642DFF'}} key={image.id}>
                        <span onClick={()=>setShow(image)} className='h4'>{image.title}</span>
                        <FaPlus />
                        </div>)
                }
            </div>
            <div className="col-md-6">
                <div className='p-5 position-relative' style={bgFQA}>
                { show ? (<div style={{border: show === answer.img ? '5px solid #2D89FF' : ''}}>
                    <img src={answer.img}  className="w-100 rounded" alt='' /> </div>)
                : 
                <img src='https://i.ibb.co/bvWWD9t/pose-4.png' className="w-100 rounded" alt='' /> 
                }
                <div className='d-flex justify-content-start gap-2 rounded align-items-center position-absolute start-0 myexpert'>
                    <span className='bg-expert d-flex justify-content-center align-items-center'><img className='' src={myexpert} alt="" /></span>
                    <span>Get Solutions <br /> From Our Experts</span>
                </div>
                </div>
            </div>
        </div>
    );
};

export default FQA;