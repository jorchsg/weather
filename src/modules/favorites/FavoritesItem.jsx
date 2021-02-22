import React from 'react';
import { Col, ListGroup, Button, Row } from 'react-bootstrap';
import '../.././index.scss';

const FavoritesItem = ({ removeFavorite, favorites }) => {

    if (!favorites) return null;

    const title = favorites.length === 0 ? '' : "Manage Favorites";

    return (
        <>
            <Row>
                <Col>
                    <h2 className="mt-3 text-center">{title}</h2>
                    <div className="card-grid">
                        {
                            favorites.map(({ id, name, main, }) => {
                                return (
                                    <ListGroup
                                        className="m-2"
                                        style={{ width: '20rem' }}
                                        key={id}
                                    >
                                        <ListGroup.Item>
                                            <h5 className="text-center">Detail</h5>
                                            <strong>Units: </strong>
                                            {Math.round(main.temp)} &#8451;
                                            <br></br>
                                            <strong>City: </strong><span>{name}</span>
                                            <br></br>
                                            <Button
                                                variant="danger" size="sm"
                                                className="float-right mt-2"
                                                onClick={() => removeFavorite(id)}
                                            >Delete
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                )
                            })
                        }
                    </div>
                </Col>
            </Row>


        </>
    )
}

export default FavoritesItem
