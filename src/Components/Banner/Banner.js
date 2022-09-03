import React from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import style from "../../Assets/sass/Banner/Banner.module.scss";
import banner from "../../Assets/images/banner.png";
import Header from "../Header/Header";

const Banner = () => {
    return (
        <>
            <Carousel className={style.caro1}>
                <Carousel.Item className={style.caroItem1}>
                    <img className={`d-block w-100 ${style.img1}`} src={banner} alt='First slide' />

                    <Carousel.Caption className={style.captionPos}>
                        <p className={style.banner1Text1}>PROTECTION</p>
                        <p className={style.banner1Text2}>IS WHAT WE DO BEST</p>
                        <div>
                            <Button variant='danger' className={style.button1}>
                                Learn More
                            </Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={style.caroItem1}>
                    <img className={`d-block w-100 ${style.img1}`} src={banner} alt='First slide' />

                    <Carousel.Caption className={style.captionPos}>
                        <p className={style.banner1Text1}>PROTECTION</p>
                        <p className={style.banner1Text2}>IS WHAT WE DO BEST</p>
                        <div>
                            <Button variant='danger' className={style.button1}>
                                Learn More
                            </Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={style.caroItem1}>
                    <img className={`d-block w-100 ${style.img1}`} src={banner} alt='First slide' />

                    <Carousel.Caption className={style.captionPos}>
                        <p className={style.banner1Text1}>PROTECTION</p>
                        <p className={style.banner1Text2}>IS WHAT WE DO BEST</p>
                        <div>
                            <Button variant='danger' className={style.button1}>
                                Learn More
                            </Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;
