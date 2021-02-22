import React from 'react';
import { Card, Button } from 'react-bootstrap';

const WeatherList = (props) => {

    // Destructuging Props
    const { cities, addToFavorites, selectCity } = props;

    return (
        <>
            <h1 className="text-center">Current Weather</h1>
            {
                cities.map((city) => {
                    return (
                        <Card
                            className="text-center m-3 bg-light"
                            border="info"
                            // style={{ width: '20rem' }}
                            key={city.id}
                        >
                            <Card.Body>
                                <Card.Title
                                    className="text-primary"
                                >{Math.round(city.main.temp)} &#8451;
                                </Card.Title>
                                <Card.Subtitle
                                    className="mb-2 text-muted mb-3 text-dark"
                                >{city.name}
                                </Card.Subtitle>
                                <Button
                                    className="float-right"
                                    variant="primary"
                                    size="sm"
                                    onClick={
                                        () => { selectCity(city.id) }
                                    }
                                >More Info
                                </Button>
                                <Button
                                    className="float-left"
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={
                                        () => { addToFavorites(city) }
                                    }
                                >Favorite &#x2661;
                                </Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default WeatherList;
