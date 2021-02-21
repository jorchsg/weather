import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';


const WeatherDetail = ({ city }) => {

    // Convert Obtject to an Array
    const data = Array.from(city);

    return (
        <>
            <h1 className="text-center">Details</h1>
            {
                data.map(({ id, name, main }) => {
                    return (
                        <Card
                            className="text-center mb-3 bg-light"
                            border="info"
                            key={id}
                        >
                            <Card.Body>
                                <Card.Subtitle
                                    className="mb-2 text-muted mb-3 text-dark"
                                >The weather today at {name}
                                </Card.Subtitle>
                                <Card.Title
                                    className="text-dark"
                                >{main.temp}  &#8451;
                            </Card.Title>
                                <ListGroup variant="secondary">
                                    <div className="row">
                                        <div className="col-6 col-xs-12">
                                            <ListGroup.Item variant="secondary">
                                                Max: {main.temp_max} &#8451;
                                            </ListGroup.Item>
                                            <ListGroup.Item variant="secondary">
                                                Min: {main.temp_min}  &#8451;
                                            </ListGroup.Item>
                                        </div>
                                        <div className="col-6 col-xs-12">
                                            <ListGroup.Item variant="secondary">
                                                Humidity: {main.temp_max}%
                                            </ListGroup.Item>
                                            <ListGroup.Item variant="secondary">
                                                Wind: {main.humidity} mph
                                            </ListGroup.Item>
                                        </div>
                                    </div>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    )
                })
            }

        </>
    )
}

export default WeatherDetail;
