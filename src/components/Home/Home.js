import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    return (
        <Container className="py-5">
            <Banner></Banner>
            <Service showAll={false}></Service>
        </Container>
    );
};

export default Home;