import React from "react";
import Container from "react-bootstrap/Container";
import style from "../../Assets/sass/Header/Header.module.scss";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
    return (
        <>
            <Container fluid>
                <HeaderTop></HeaderTop>
                <HeaderMenu></HeaderMenu>
            </Container>
        </>
    );
};

export default Header;
