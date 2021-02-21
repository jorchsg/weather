import React from 'react'
import Header from '../../library/common/components/header/Header';
import Menu from '../../library/common/components/menu/Menu';
import FavoritesItem from './FavoritesItem';

import { Toast } from 'react-bootstrap';

const Favorites = ({ }) => {


    // Get Favorites From Local Storage
    const favoritos = JSON.parse(localStorage.getItem('MyFavorites'));
    console.log(favoritos);


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
                            favoritos.map(({ id, name, main, weather }) => {
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
