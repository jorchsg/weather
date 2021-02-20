import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

// Importing svg and menu styles
// import cloudy from '../../../../resources/images/cloudy.svg'
import './menu.scss'

const Menu = () => {

    return (
        <Fragment>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Weather App |</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Weather</Nav.Link>
                    <Nav.Link href="/favorites">Favorites</Nav.Link>
                </Nav>
            </Navbar>
        </Fragment>
    )
}

export default Menu;
