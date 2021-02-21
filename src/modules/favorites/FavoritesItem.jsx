import React from 'react';
import { Table } from 'react-bootstrap';

const FavoritesItem = () => {

    return (

        <>
            <h1>Manage Your Favorites Items</h1>
            <Table striped bordered hover size="sm" className="mt-2">
                <thead>
                    <tr>
                        <th>Units</th>
                        <th>City</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                </tbody>
            </Table>

        </>
    )
}

export default FavoritesItem
