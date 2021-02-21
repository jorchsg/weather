import React, { useState, useEffect } from 'react'
import Header from '../../library/common/components/header/Header';
import Menu from '../../library/common/components/menu/Menu';
import FavoritesItem from './FavoritesItem';

import { Toast } from 'react-bootstrap';

const Favorites = ({ }) => {

    // State that storage favorites
    const [favorites, setFavorites] = useState([])

    // Load Favorites When Page Load
    useEffect(() => {

        const getFavorites = () => {
            // Get Favorites From Local Storage
            const favoritos = JSON.parse(localStorage.getItem('MyFavorites'));
            setFavorites(favoritos);
        }

        getFavorites();


    }, [])


    return (
        <>
            <Menu />
            <Header
                title='Your Favorites'
            />

            <div className="container">

                <h1>Mi Favorites Cities</h1>
                <div className="row">
                    <div className="col">
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
                                            <h1 className="text-center">{main.temp}</h1>
                                        </Toast.Body>
                                    </Toast>
                                )
                            })
                        }

                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <FavoritesItem />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Favorites;
