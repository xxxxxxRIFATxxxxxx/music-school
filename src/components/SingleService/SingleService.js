import React from 'react';
import './SingleService.css';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SingleService = props => {
    const { id, name, details, image } = props.service;
    const { showFull } = props;
    const showFullDetails = showFull ? details : details.slice(0, 50);
    const imageClass = showFull ? "img-fluid" : "img-fluid card-image";

    return (
        <Col>
            <Card className="bg-dark">
                <Card.Img variant="top" src={image} className={imageClass} />
                <Card.Body>
                    <Card.Title className="metal-font">{name}</Card.Title>
                    <Card.Text>
                        {showFullDetails}
                    </Card.Text>

                    <NavLink to={`/service/${id}`} className="btn btn-danger w-100">Enroll</NavLink>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleService;