import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import logo from "../../../Assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "../../../Assets/sass/Header/HeaderMenu/HeaderMenu.module.scss";

const HeaderMenu = () => {
    const [iconState, setIconState] = useState([
        {
            id: 0,
            link: "home",
            click: false
        },
        {
            id: 1,
            link: "about",
            click: false
        },
        {
            id: 2,
            link: "products",
            click: false
        },
        {
            id: 3,
            link: "rentals",
            click: false
        },
        {
            id: 4,
            link: "services",
            click: false
        },
        {
            id: 5,
            link: "resources",
            click: false
        },
        {
            id: 6,
            link: "contact",
            click: false
        }
    ]);

    console.log(iconState);

    const handleNavClick = id => {
        console.log(id);

        let obj;

        let updatedArray = iconState.map(eachIcon => {
            if (id == eachIcon.link) {
                obj = {
                    link: eachIcon.link,
                    click: true
                };

                return obj;
            } else {
                obj = {
                    link: eachIcon.link,
                    click: false
                };

                return obj;
            }
        });

        setIconState(() => {
            return updatedArray;
        });
    };

    return (
        <>
            <Row className={style.rowStyle}>
                <Col lg='5'>
                    <div className={style.imgContainer}>
                        <Image src={logo} fluid className={style.logo}></Image>
                    </div>
                </Col>
                <Col lg='7'>
                    <Navbar expand='lg' className={style.navbarStyle} sticky='top'>
                        <Container>
                            <Navbar.Toggle
                                aria-controls='basic-navbar-nav'
                                className={style.toggleStyle}
                            />
                            <Navbar.Collapse id='basic-navbar-nav'>
                                <Nav className={`me-auto ${style.navStyle}`}>
                                    {iconState.map((eachState, stateIndex) => {
                                        const { id, link, click } = eachState;
                                        return (
                                            <div key={id}>
                                                <Nav.Link
                                                    href={"#" + link}
                                                    className={style.linkStyle}
                                                    onClick={() => {
                                                        handleNavClick(link);
                                                    }}
                                                >
                                                    {link.toUpperCase()}
                                                </Nav.Link>
                                            </div>
                                        );
                                    })}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </>
    );
};

export default HeaderMenu;
