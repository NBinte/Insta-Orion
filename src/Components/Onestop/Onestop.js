import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import onestop from "../../Assets/images/onestop.png";
import style from "../../Assets/sass/Onestop/Onestop.module.scss";

const Onestop = () => {
    return (
        <>
            <Row className={style.row1}>
                <Col xxl='6' xl='6' lg='6' md='4'>
                    <div className={style.imgContainer}>
                        <Image src={onestop} fluid></Image>
                    </div>
                </Col>

                <Col xxl='6' xl='6' lg='6' md='8'>
                    <div className={style.textContainer}>
                        <p className={style.text1}>Your One Stop Safety Shop</p>
                        <p className={style.text2}>
                            Accidents or injuries are easily avoided with the right knowledge,
                            advice, and equipment in the workplace. Orion Safety Ltd. located in
                            Calgary, Al- berta is an eatablished Western Canadian leader in safety
                            products and services since 2007. With over 30 years of safety
                            experience, our experts work closely with you to ensure you have the
                            tools, knowledge, and proce- dures needed to ensure the well-being of
                            your staff.
                        </p>

                        <p className={style.text3}>
                            Whether it's personal protective equipment, SCBA, fire prevention, gas
                            de- tection, fall protection or emergency rescue gear, safety in your
                            environment is our goal. Give us a call anytime. We appreciate your
                            business and look forward to hearing from you!
                        </p>

                        <div>
                            <Button variant='danger' className={style.button1}>
                                Learn More
                            </Button>

                            <Button variant='light' className={style.button2}>
                                Get In Touch
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Onestop;
