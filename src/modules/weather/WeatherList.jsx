import React from 'react';
import { Card, Button } from 'react-bootstrap';

const WeatherList = () => {
    return (

        <>
            <div className="col-lg-6 col-sm-12">
                <h1 className="text-center">Current Weather</h1>
                <div className="row">
                    <div className="col-lg-12 col-sm-12">

                        <Card
                            className="text-center mb-3 bg-light"
                            border="info"
                        >
                            <Card.Body>
                                <Card.Title
                                    className="text-primary"
                                >23 &#8457;
                            </Card.Title>
                                <Card.Subtitle
                                    className="mb-2 text-muted mb-3 text-dark"
                                >Los Angeles
                            </Card.Subtitle>
                                <Button
                                    className="float-right"
                                    variant="outline-danger"
                                    size="sm"
                                >Add &#x2661;
                            </Button>
                            </Card.Body>
                        </Card>

                        <Card
                            className="text-center mb-3 bg-light"
                            border="info"
                        >
                            <Card.Body>
                                <Card.Title
                                    className="text-primary"
                                >23 &#8457;
                            </Card.Title>
                                <Card.Subtitle
                                    className="mb-2 text-muted mb-3 text-dark"
                                >Los Angeles
                            </Card.Subtitle>
                                <Button
                                    className="float-right"
                                    variant="outline-danger"
                                    size="sm"
                                >Add &#x2661;
                            </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WeatherList;
