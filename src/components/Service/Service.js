import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ServicesContext } from '../../App';
import SingleService from '../SingleService/SingleService';

const Service = props => {
    const services = useContext(ServicesContext);
    const { showAll } = props;
    const finalServices = showAll ? services : services.slice(0, 4);

    return (
        <Container className="py-5 mt-5">
            <h2 className="metal-font display-6 text-center pb-5">Our Service</h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    finalServices.map(service => <SingleService key={service.id} service={service} showFull={false}></SingleService>)
                }
            </Row>
        </Container>
    );
};

export default Service;