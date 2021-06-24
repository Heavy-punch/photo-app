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
                        <a
                            className="header__link header__title"
                            href="https://www.facebook.com/nguyenxnguyen93"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="fab fa-facebook"></i>hello
                        </a>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header__link"
                            to="/photos"
                            activeClassName="header__link--active"
                        >
                            <i class="fas fa-home"></i>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;

