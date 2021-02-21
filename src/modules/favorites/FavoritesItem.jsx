import React from 'react';
import { Table, ListGroup, Button } from 'react-bootstrap';

const FavoritesItem = ({ removeFavorite, favorites }) => {

    console.log(favorites)

    if (!favorites) return null;

    return (
        <>
            <h1>Manage Your Favorites Items</h1>

            {
                favorites.map((ele) => {
                    return (
                        <ListGroup
                            key={ele.id}
                        >
                            <ListGroup.Item>
                                {ele.main.temp} <span> {ele.name}</span>
                                <Button
                                    variant="danger"
                                    className="mx-2"
                                    onClick={() => removeFavorite(ele.id)}
                                >Delete
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>

                        /* <Table
                            striped bordered hover size="sm"
                            className="mt-2"
                            id={ele.id}
                        >
                            <thead>
                                <tr>
                                    <th>Units</th>
                                    <th>City</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{ele.main.temp}</td>
                                    <td>{ele.name}</td>
                                    <td>Eliminar</td>
                                </tr>
                            </tbody>
                        </Table>
                        </div> */
                    )
                })
            }

        </>
    )
}

export default FavoritesItem
