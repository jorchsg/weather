import React, { Fragment, useState, useEffect } from 'react';
// Components
import Header from '../../library/common/components/header/Header';
import Menu from '../../library/common/components/menu/Menu';
import WeatherList from './WeatherList';
import WeatherDetail from './WeatherDetail';

import { Container, Row, Col } from 'react-bootstrap';

import '../../index.scss';

const Weather = () => {

    // State 
    const [cities, setCities] = useState([]);

    const [city, setCity] = useState({})

    const [favorites, setFavorites] = useState(JSON.parse(localStorage?.MyFavorites || '[]'));

    // Add To Favorites Info
    const addToFavorites = (city) => {

        const data = favorites.map((ele => ele.id === city.id));
        const exist = data.includes(true);
        if (exist) return;

        setFavorites([
            ...favorites,
            city
        ]);

    }

    // Adding to Local Storage
    localStorage.setItem('MyFavorites', JSON.stringify(favorites));

    const selectCity = async (id) => {
        const citySelected = cities.filter(element => element.id === id)
        setCity(citySelected);
    }


    useEffect(() => {
        const getCities = async () => {
            try {
                //Bounding Box Variables For Determined Area
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

                setCities(result.list);
            } catch (err) {
                console.log(err.message);
            }

        }

        getCities();

    }, [])

    return (
        <Fragment>
            <Menu />
            <Container>
                <Header
                    title="Weather Today"
                />
                <Row>
                    <Col xs={12} md={7}>
                        <WeatherList
                            cities={cities}
                            addToFavorites={addToFavorites}
                            selectCity={selectCity}
                        />
                    </Col>
                    <Col xs={12} md={5}>
                        <WeatherDetail
                            city={city}
                        />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Weather;
