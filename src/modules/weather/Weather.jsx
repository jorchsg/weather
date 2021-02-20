import React, { Fragment, useState, useEffect } from 'react';
import Header from '../../library/common/components/header/Header';
import Menu from '../../library/common/components/menu/Menu';
import WeatherList from './WeatherList';
import WeatherDetail from './WeatherDetail';


const Weather = () => {

    // State 
    const [cities, setCities] = useState({});

    useEffect(() => {

        const requestAPI = async () => {

            if (cities) {
                //Bounding Box Variables
                const longLeft = -118;
                const latBottom = 32;
                const longRight = -116;
                const latTop = 34;
                const zoom = 9;

                // Variables requiered to request API
                const bbox = `${longLeft},${latBottom},${longRight},${latTop},${zoom}`;;
                const apiId = '60bd76654b6269919baec6ed35543967';
                const apiURL = 'https://api.openweathermap.org/data/2.5';

                const url = `${apiURL}/box/city?bbox=${bbox}&appid=${apiId}`;

                const response = await fetch(url);
                const result = await response.json();

                setCities(result);
            }

        }

        requestAPI();

    }, [])

    console.log(cities);
    console.log(cities.list);


    return (
        <Fragment>
            <Menu />
            <div className="container">
                <Header
                    title="Weather Near To Your Location"
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
