import React from 'react';
import Appointment from '../HomeSections/Appointment';
import Banner from '../HomeSections/Banner';
import FQA from '../HomeSections/FQA';
import Services from '../HomeSections/Services';
import Testimonial from '../HomeSections/Testimonial';
import Treatment from '../HomeSections/Treatment';

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