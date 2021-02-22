import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../../index.scss';

const WeatherList = (props) => {

    // Destructuging Props
    const { cities, addToFavorites, selectCity } = props;

    return (
        <>
            <h1 className="text-center mb-2">Current Weather</h1>

            <div className="card-grid">
                {
                    cities.map((city) => {
                        return (
                            <Card
                                onClick={
                                    () => { selectCity(city.id) }
                                }
                                className="text-center m-2"
                                style={{ width: '18rem' }}
                                key={city.id}
                            >
                                <Card.Body>
                                    <Card.Title
                                        className="text-secondary"
                                    ><strong>{Math.round(city.main.temp)} &#8451;</strong>
                                    </Card.Title>
                                    <Card.Subtitle
                                        className="mb-2 text-muted mb-3 text-dark"
                                    >{city.name}
                                    </Card.Subtitle>
                                    <Button
                                        className="float-right"
                                        variant="primary"
                                        size="sm"
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
            </div>
        </>
    )
}

export default WeatherList;
