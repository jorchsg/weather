import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';


const WeatherDetail = () => {

    return (
        <>
            <div className="col-lg-6 col-sm-12">
                <h1 className="text-center">Weather Detail</h1>

                <div className="row">
                    <div className="col-lg-12 col-sm-12">

                        <Card
                            className="text-center mb-3 bg-light"
                            border="info"
                        >
                            <Card.Body>
                                <Card.Subtitle
                                    className="mb-2 text-muted mb-3 text-dark"
                                >The weather today at Name City
                                </Card.Subtitle>
                                <Card.Title
                                    className="text-dark"
                                >23 &#8457;
                                </Card.Title>
                                <ListGroup variant="secondary">
                                    <div className="row">
                                        <div className="col-6 col-xs-12">
                                            <ListGroup.Item variant="secondary">Max:</ListGroup.Item>
                                            <ListGroup.Item variant="secondary">Min:</ListGroup.Item>

                                        </div>
                                        <div className="col-6 col-xs-12">
                                            <ListGroup.Item variant="secondary">Humidity:</ListGroup.Item>
                                            <ListGroup.Item variant="secondary">Wind:</ListGroup.Item>
                                        </div>
                                    </div>
                                </ListGroup>
                            </Card.Body>
                        </Card>


                    </div>
                </div>

            </div>
        </>
    )
}

export default WeatherDetail;
