import React from 'react';
import Appointment from '../HomeSections/Appointment/Appointment';
import Banner from '../HomeSections/Banner/Banner';
import FQA from '../HomeSections/FQA/FQA';
import Services from '../HomeSections/Services/Services';
import Testimonial from '../HomeSections/Testimonial/Testimonial';
import Treatment from '../HomeSections/Treatment/Treatment';

const Home = () => {
    return (
        <div className='container'>
            <Banner />
            <Services />
            <Treatment />
            <Appointment />
            <FQA />
            <Testimonial />
        </div>
    );
};

export default Home;