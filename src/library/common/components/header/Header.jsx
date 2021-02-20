import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ title }) => {

    return (
        <>
            <div className="container">
                <h1 className="title">{title}</h1>
            </div>
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
