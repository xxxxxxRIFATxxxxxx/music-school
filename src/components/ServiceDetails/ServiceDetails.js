import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { ServicesContext } from '../../App';
import SingleService from '../SingleService/SingleService';

const ServiceDetails = () => {
    const { id } = useParams();
    const services = useContext(ServicesContext);
    const findService = services.find(service => service.id.toString() === id);

    return (
        <Container className="py-5 mt-5">
            <Row xs={1}>
                <SingleService service={findService} showFull={true}></SingleService>
            </Row>
        </Container>
    );
};

export default ServiceDetails;