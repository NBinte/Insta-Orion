import React from "react";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import style from "../Assets/sass/App.module.scss";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import Onestop from "./Onestop/Onestop";

const App = () => {
    return (
        <>
            <Container fluid className={style.containerStyle}>
                <Header></Header>
                <Banner></Banner>
                <Onestop></Onestop>
            </Container>
        </>
    );
};

export default App;
