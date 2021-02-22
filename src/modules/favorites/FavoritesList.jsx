import React, { useState, useEffect } from 'react'
import Header from '../../library/common/components/header/Header';
import Menu from '../../library/common/components/menu/Menu';
import FavoritesItem from './FavoritesItem';

import { Toast, Container, Row, Col, Form } from 'react-bootstrap';

const FavoritesList = ({ }) => {

    // State that storage favorites
    const [favorites, setFavorites] = useState([]);

    // State that storag my search
    const [search, setSearch] = useState('');

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

    // Filter favorite by name in a dynamic way while user is typing
    const searchFavorite = favorites.filter(favorite => {
        return favorite.name.toLowerCase().includes(search.toLowerCase())
    })


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
                    <Form.Group>
                        <Form.Control
                            type="input"
                            placeholder="Find Your Favorites"
                            name="name"
                            id="name"
                            onChange={e => setSearch(e.target.value)}
                        />
                    </Form.Group>
                </Form>

                {/* Favorites List */}
                <Row>
                    <Col xs={12} md={6} lg={8}>

                        <h2 className="mt-3">{title}</h2>
                        {
                            searchFavorite.map(({ id, name, main, weather }) => {
                                return (
                                    <Toast
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
                    </Col>

                    {/* Favorite Item component */}
                    <FavoritesItem
                        favorites={favorites}
                        removeFavorite={removeFavorite}
                    />
                </Row>

            </Container>

        </>
    )
}

export default FavoritesList;