import React from 'react';
import { Col, ListGroup, Button } from 'react-bootstrap';

const FavoritesItem = ({ removeFavorite, favorites }) => {

    if (!favorites) return null;

    const title = favorites.length === 0 ? '' : "Manage Favorites";

    return (
        <>
            <Col xs={12} md={6} lg={4}>
                <h2 className="mt-3">{title}</h2>
                {
                    favorites.map(({ id, name, main, }) => {
                        return (
                            <ListGroup
                                className="mb-2"
                                key={id}
                            >
                                <ListGroup.Item>
                                    <h6 className="text-center">Detail</h6>
                                    <strong>Units: </strong>
                                    {Math.round(main.temp)} &#8451;
                                    <br></br>
                                    <strong>City: </strong><span>{name}</span>
                                    <Button
                                        variant="danger"
                                        className="float-right"
                                        onClick={() => removeFavorite(id)}
                                    >Delete
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        )
                    })
                }
            </Col>

        </>
    )
}

export default FavoritesItem
