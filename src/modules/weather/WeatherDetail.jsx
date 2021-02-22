import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const WeatherDetail = ({ city }) => {

    // Convert Obtject to an Array
    const data = Array.from(city);

    return (
        <>
            <h1 className="text-center mb-2">Details</h1>
            {
                data.map(({ id, name, main, weather }) => {
                    return (
                        <Card
                            className="text-center"
                            key={id}
                        >
                            <Card.Header as="h5">{name}</Card.Header>
                            <Card.Title
                                className="text-dark mb-0 mt-2"
                            > {Math.round(main.temp)}  &#8451;
                                </Card.Title>
                            <Card.Subtitle
                                className="text-dark mt-2"
                            >{weather[0].main}
                            </Card.Subtitle>

                            <Card.Body className="pt-1">
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <strong>Max:</strong> {Math.round(main.temp_max)} &#8451;<br></br>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Min:</strong> {Math.round(main.temp_min)}  &#8451;<br></br>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Humidity:</strong> {Math.round(main.humidity)}%<br></br>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Wind: </strong>{main.humidity} mph
                                    </ListGroup.Item>
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
