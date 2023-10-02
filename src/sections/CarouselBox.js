import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import ck from "../assets/ck.jpg";
import tissot from "../assets/tissot.jpeg";
import certina from "../assets/certina.jpg";
import orient  from "../assets/orient.jpg";
import diesel from "../assets/diesel.jpg";
import casio from "../assets/casio.jpg";
import victorinox from "../assets/victorinox.jpg";
import parker from "../assets/parker.jpg";
import waterman from "../assets/waterman.jpg";

export default function CarouselBox() {
    return (
        <Container>
            <Carousel className='b-1'>
                <Carousel.Item>
                    <img className="b-block w-100" src={ certina } alt="Купить Tissot в Алматы"/>
                    <Carousel.Caption className='hide-on-mobile'>
                        <h3 style={{color: "white"}}>Certina</h3>
                        <p style={{color: "white"}}>Швейцарское качество и настоящий спортивный дух - с 1888 года</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="b-block w-100" src={ tissot } alt="Купить Tissot в Алматы"/>
                    <Carousel.Caption className='hide-on-mobile'>
                        <h3 style={{color: "white"}}>Tissot</h3>
                        <p style={{color: "white"}}>«Новаторство - наша традиция» - прекрасно отражает положение вещей</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="b-block w-100" src={ ck } alt="Купить Calvin Klein в Алматы"/>
                    <Carousel.Caption className='hide-on-mobile'>
                        <h3 style={{color: "black"}}>Calvin Klein</h3>
                        <p style={{color: "black"}}>Чистота, элегантность и сексуальность — вот основа и фирменный стиль.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="b-block w-100" src={ orient } alt="Купить Orient в Алматы" />
                    <Carousel.Caption className='hide-on-mobile'>
                        <h3>Orient</h3>
                        <p>Высокое качество, стильный дизайн, популярный во всем мире.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="b-block w-100" src={ diesel } alt="Купить Diesel в Алматы" />
                    <Carousel.Caption>
                        <h3>Diesel</h3>
                        <p>Бренд ломающий все стереотипы в головах. Буть смелым.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="b-block w-100" src={ casio } alt="Купить Tissot в Алматы"/>
                    <Carousel.Caption className='hide-on-mobile'>
                        <h3 style={{color: "white"}}>Casio</h3>
                        <p style={{color: "white"}}>Культурный феномен часового мира!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="b-block w-100" src={ victorinox } alt="Купить Victorinox в Алматы" />
                    <Carousel.Caption className='hide-on-mobile'>
                        <h3 style={{color: "black"}}>Victorinox</h3>
                        <p style={{color: "black"}}>Классически универсальное швейцарское армейское наследие</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="b-block w-100" src={ parker } alt="Купить Parker в Алматы" />
                    <Carousel.Caption className='hide-on-mobile'>
                        <h3>Parker</h3>
                        <p>Яркий представитель легендарного бренда</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="b-block w-100" src={ waterman } alt="Купить Waterman в Алматы" />
                    <Carousel.Caption>
                        <h3>Waterman</h3>
                        <p>Разработан, чтобы украсить Ваше воображение.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}