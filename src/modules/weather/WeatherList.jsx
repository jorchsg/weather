import React from 'react';
import { Card, Button } from 'react-bootstrap';

const WeatherList = (props) => {

    // Destructuging Props
    const { cities, addToFavorites, selectCity } = props;

    return (
        <>
            <div className="col-lg-6 col-sm-12">
                <h1 className="text-center">Current Weather</h1>
                <div className="row">

                    {
                        cities.map((element) => {
                            return (
                                <Card
                                    className="text-center m-3 bg-light"
                                    border="info"
                                    style={{ width: '14rem' }}
                                    key={element.id}
                                >
                                    <Card.Body>
                                        <Card.Title
                                            className="text-primary"
                                        >{element.main.temp} &#8457;
                                            </Card.Title>
                                        <Card.Subtitle
                                            className="mb-2 text-muted mb-3 text-dark"
                                        >{element.name}
                                        </Card.Subtitle>
                                        <Button
                                            className="float-right"
                                            variant="outline-danger"
                                            size="sm"
                                            onClick={
                                                () => { addToFavorites(element) }
                                            }
                                        >Add &#x2661;
                                        </Button>
                                        <Button
                                            className="float-left"
                                            variant="outline-primary"
                                            size="sm"
                                            onClick={
                                                () => { selectCity(element.id) }
                                            }
                                        >Select
                                        </Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }


                </div>

            </div>
        </>
    )
}

export default WeatherList;
