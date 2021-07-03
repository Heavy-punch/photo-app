import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss'

Header.propTypes = {

};

function Header(props) {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header__title"
                            to="/photos"
                            activeClassName="header__title--active"
                        >
                            <span><i className="fas fa-home" /></span><span>HOME</span>
                        </NavLink>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header__link"
                            to="/sign-in"
                            activeClassName="header__link--active"
                        >
                            Sign In
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;

