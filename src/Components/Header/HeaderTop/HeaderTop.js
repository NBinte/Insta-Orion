import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import locImage from "../../../Assets/images/location.png";
import dotImage from "../../../Assets/images/full-stop.png";
import teleImage from "../../../Assets/images/telephone.png";
import envelopeImage from "../../../Assets/images/envelope.png";
import fbImage from "../../../Assets/images/facebook-app-symbol.png";
import instaImage from "../../../Assets/images/instagram.png";
import linkedImage from "../../../Assets/images/linkedin.png";

import style from "../../../Assets/sass/Header/HeaderTop/HeaderTop.module.scss";

const HeaderTop = () => {
    return (
        <>
            <Row className={style.row1}>
                <Col lg='5' className={style.locationCol}>
                    <div className={style.locPosition}>
                        <Image src={locImage} fluid className={style.locImage}></Image>
                        <p className={style.locationText1}>1161 40th Ave NE </p>

                        <Image src={dotImage} fluid className={style.dotImage}></Image>
                        <p className={style.locationText2}>Calgary, Alberta</p>
                    </div>
                </Col>
                <Col lg='4' className={style.locationCol}>
                    <div className={style.numPosition}>
                        <Image src={teleImage} fluid className={style.teleImage}></Image>
                        <p className={style.numText}>(403) 769 - 1799 </p>

                        <Image src={envelopeImage} fluid className={style.envelopeImage}></Image>
                        <p className={style.mailText}>Email Us</p>
                    </div>
                </Col>
                <Col lg='3' className={style.socialCol}>
                    <div className={style.socialPosition}>
                        <Image src={fbImage} fluid className={style.fbImage}></Image>
                        <Image src={instaImage} fluid className={style.instaImage}></Image>
                        <Image src={linkedImage} fluid className={style.linkedImage}></Image>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default HeaderTop;
