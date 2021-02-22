import React, { useState, useEffect } from 'react'
import Header from '../../library/common/components/header/Header';
import Menu from '../../library/common/components/menu/Menu';
import FavoritesItem from './FavoritesItem';
import './favorites.scss';

import { Toast, Container, Row, Col, Form } from 'react-bootstrap';

const FavoritesList = ({ }) => {

    // State that storage favorites
    const [favorites, setFavorites] = useState([]);

    const [search, setSearch] = useState('');

    const [filteredFavorites, setFilteredFavorites] = useState([]);

    // Load Favorites When Page Load
    useEffect(() => {

        const getFavorites = () => {
            // Get Favorites From Local Storage
            const favoritos = JSON.parse(localStorage.getItem('MyFavorites'));
            setFavorites(favoritos);
        }

        getFavorites();

    }, [])

    // Delete favorite by id
    const removeFavorite = (id) => {
        const favoriteSelected = favorites.filter(elem => elem.id !== id)
        setFavorites(favoriteSelected);
    }

    useEffect(() => {

        // Filter favorite by name in a dynamic way while user is typing
        setFilteredFavorites(
            favorites.filter(favorite => {
                return favorite.name.toLowerCase().includes(search.toLowerCase())
            })
        );

    }, [search, favorites])

    if (!favorites) return null;

    // Send a message tu user if not exists favorites added by user
    const title = favorites.length === 0 ? "Witouth Favorites" : 'Favorites List'

    return (
        <>
            <Menu />
            <Header
                title='Your Favorites'
            />

            <Container>

                {/* Search Form */}
                <Form>
                    <Form.Group className="m-2">
                        <Form.Label><h5>Search</h5></Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="Input City Name"
                            name="name"
                            id="name"
                            onChange={e => setSearch(e.target.value)}
                        />
                    </Form.Group>
                </Form>

                {/* Favorites List */}
                <Row>
                    <Col xs={12}>
                        <h2 className="mt-3 text-center">{title}</h2>
                        <div className="card-grid">
                            {
                                filteredFavorites.map(({ id, name, main, weather }) => {
                                    return (
                                        <Toast
                                            style={{ width: '20rem' }}
                                            className="m-2"
                                            key={id}
                                        >
                                            <Toast.Header>
                                                <strong className="mr-auto">{name}</strong>
                                                <small>{weather[0].description}</small>
                                            </Toast.Header>
                                            <Toast.Body>
                                                <h1 className="text-center">
                                                    {Math.round(main.temp)}
                                                    <strong> &#8451;</strong></h1>
                                            </Toast.Body>
                                        </Toast>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>

                {/* Favorite Item component */}
                <FavoritesItem
                    favorites={favorites}
                    removeFavorite={removeFavorite}
                />

            </Container>

        </>
    )
}

export default FavoritesList;
