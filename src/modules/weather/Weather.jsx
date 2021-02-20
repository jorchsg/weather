import React, { Fragment } from 'react';
import Header from '../../library/common/components/header/Header';
import Menu from '../../library/common/components/menu/Menu';
import WeatherList from './WeatherList';
import WeatherDetail from './WeatherDetail';


const Weather = () => {

    return (
        <Fragment>
            <Menu />
            <div className="container">
                <Header
                    title="Check The Current Weather"
                />
                <div className="row">
                    <WeatherList

                    />

                    <WeatherDetail

                    />
                </div>
            </div>
        </Fragment>
    )
}

export default Weather;
