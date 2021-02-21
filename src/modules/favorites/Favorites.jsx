import React, { useState, useEffect } from 'react'
import Header from '../../library/common/components/header/Header';
import Menu from '../../library/common/components/menu/Menu';
import FavoritesItem from './FavoritesItem';

import { Toast, Container, Row, Col } from 'react-bootstrap';

const Favorites = ({ }) => {

    // State that storage favorites
    const [favorites, setFavorites] = useState([]);

    // Load Favorites When Page Load
    useEffect(() => {

        const getFavorites = () => {
            // Get Favorites From Local Storage
            const favoritos = JSON.parse(localStorage.getItem('MyFavorites'));
            setFavorites(favoritos);
        }

        getFavorites();

    }, [])

    const removeFavorite = (id) => {
        const favoriteSelected = favorites.filter(elem => elem.id !== id)
        setFavorites(favoriteSelected);
    }

    if (!favorites) return null;

    const title = favorites.length === 0 ? "Witouth Favorites" : 'Favorites List'

    return (
        <>
            <Menu />
            <Header
                title='Your Favorites'
            />

            <Container>
                <Row>
                    <Col xs={12} md={6}>

                        <h2 className="mt-3">{title}</h2>
                        {
                            favorites.map(({ id, name, main, weather }) => {
                                return (
                                    <Toast
                                        key={id}
                                    >
                                        <Toast.Header>
                                            <strong className="mr-auto">{name}</strong>
                                            <small>{weather[0].description}</small>
                                        </Toast.Header>
                                        <Toast.Body>
                                            <h1 className="text-center">{main.temp} <strong>&#8451;</strong></h1>
                                        </Toast.Body>
                                    </Toast>
                                )
                            })
                        }

                    </Col>
                    <FavoritesItem
                        favorites={favorites}
                        removeFavorite={removeFavorite}
                    />
                </Row>

            </Container>

        </>
    )
}

export default Favorites;
