import React from 'react'
import Header from '../../library/common/components/header/Header';
import Menu from '../../library/common/components/menu/Menu';

const Favorites = () => {

    return (
        <>
            <Menu />
            <Header />
            <div className="container">
                <h1>Mi Favorites</h1>
            </div>
        </>
    )
}

export default Favorites;
