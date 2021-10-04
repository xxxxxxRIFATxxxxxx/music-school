import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuitar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <Row xs={1} md={2} className="g-2">
            <Col>
                <Card className="bg-dark border-0">
                    <Card.Body>
                        <Card.Title className="display-4 metal-font">Learn Music</Card.Title>
                        <Card.Text>
                            This is a music school website. Here you can learn any kind of musical instrument. You can select your preferred music course.
                        </Card.Text>

                        <NavLink to="/service" className="btn btn-danger">Service</NavLink>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="bg-dark border-0">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faGuitar} className="guitar-icon" />
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default Banner;