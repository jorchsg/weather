import React, { Fragment } from 'react';
import Header from '../../library/common/components/header/Header';
import Menu from '../../library/common/components/menu/Menu';

const Weather = () => {

    return (
        <Fragment>
            <Menu />
            <Header />
            <div className="container">
                <h1>The Weather Today</h1>
            </div>
        </Fragment>
    )
}

export default Weather;
