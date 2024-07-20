import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import women from "../assets/slide/1.png";
import men from "../assets/slide/2.png"
import pen from "../assets/slide/3.png";
import knife from "../assets/slide/4.png";
import pol from "../assets/slide/5.png"
import globo from "../assets/slide/6.png";
import figura from "../assets/slide/7.png";
import kaspi from "../assets/slide/8.png"
import kos  from "../assets/slide/9.png";
import go from "../assets/go2.png";

export default function CarouselBox() {
    return (
        <Container>
            <div class='hide-on-mobile'>
                <Carousel className='b-1'>
                    <Carousel.Item>
                        <a href='/shop?gender=2'><img className="b-block w-100" src={ women } alt="Купить мужские часы в Алматы"/></a>
                        <Carousel.Caption className='hide-on-mobile'>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href='/shop?gender=3'><img className="b-block w-100" src={ men } alt="Купить женские часы в Алматы"/></a>
                        <Carousel.Caption className='hide-on-mobile'>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href='/shop?brend=1'><img className="b-block w-100" src={ pen } alt="Купить перьевые ручки в Алматы"/></a>
                        <Carousel.Caption className='hide-on-mobile'>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href='/shop?brand=15'><img className="b-block w-100" src={ knife } alt="Купить армейские ножи в Алматы" /></a>
                        <Carousel.Caption className='hide-on-mobile'>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href='/shop?gender=9'><img className="b-block w-100" src={ pol } alt="Купить напольные часы в Алматы" /></a>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href='/shop?brend=70'><img className="b-block w-100" src={ globo } alt="Купить интерьерные глобусы в Алматы"/></a>
                        <Carousel.Caption className='hide-on-mobile'>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href='/shop?brend=68'><img className="b-block w-100" src={ figura } alt="Купить статуэтки и фигурки в Алматы" /></a>
                        <Carousel.Caption className='hide-on-mobile'>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href='https://kaspi.kz/shop/c/wrist%20watches/?q=%3Acategory%3AWrist%20watches%3AallMerchants%3AGifttime%3AavailableInZones%3AMagnum_ZONE1&sort=relevance&sc=' target='_blank'><img className="b-block w-100" src={ kaspi } alt="Купить Kaspi магазин в Алматы" /></a>
                        <Carousel.Caption className='hide-on-mobile'>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href='/shop?brand=22'><img className="b-block w-100" src={ kos } alt="Купить швейцарские комиссионые часы в Алматы" /></a>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div class='show-on-mobile'>
                <Carousel className='b-1' interval={2000}>
                    <Carousel.Item>
                        <Row>
                            <Col md={6}>
                                <img src={ women } alt="Оригинальная продукция" style={{width: '98%', marginBottom: '3%'}}/>
                            </Col>
                            <Col md={6}>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '1px'}}>
                                    Наручные женские часы – это стильный аксессуар, который может дополнить любой модный лук. Сейчас для представительниц 
                                    слабого пола есть огромный выбор часов, которые можно сочетать с разными стилями и которые могут украсить образ для любого случая.
                                </p>
                                <br></br>
                                <a href='/shop?gender=2'>
                                    <img class='scalecat' src={ go } alt="Купить женские наручные часы в Алматы" 
                                        style={{width: '10rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
                                    />
                                </a>
                                <p style={{visibility: 'hidden'}}>___</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col md={6}>
                                <img src={ men } alt="Купить мужские наручные часы в Алматы" style={{width: '98%', marginBottom: '3%'}}/>
                            </Col>
                            <Col md={6}>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '24px'}}>
                                    Мужские наручные часы в современном мире, это не просто аксессуар, который отображает время, а изделие, подчеркивающее 
                                    статус и стиль их владельца. Некоторые модели мужских часов обладают рахнообразными дополнительными функциями.
                                </p>
                                <a href='/shop?gender=3'>
                                    <img class='scalecat' src={ go } alt="Купить наручные часы в Алматы" 
                                        style={{width: '10rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
                                    />
                                </a>
                                <p style={{visibility: 'hidden'}}>___</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col md={6}>
                                <img src={ pen } alt="Купить перьевые ручки в Алматы" style={{width: '98%', marginBottom: '3%'}}/>
                            </Col>
                            <Col md={6}>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '53px'}}>
                                    Сегодня мало кто осмелиться утверждать, что перьевые ручки представляют собой исключительно канцелярскую принадлежность. 
                                    Перьевая ручка - это важный атрибут имиджа, и только потом собственно ручка. 
                                </p>
                                <a href='/shop?brend=1'>
                                    <img class='scalecat' src={ go } alt="Купить наручные часы Certina в Алматы" 
                                        style={{width: '10rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
                                    />
                                </a>
                                <p style={{visibility: 'hidden'}}>___</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col md={6}>
                                <img src={ knife } alt="Купить армейские ножи в Алматы" style={{width: '98%', marginBottom: '3%'}}/>
                            </Col>
                            <Col md={6}>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '53px'}}>
                                    Компания Victorinox занимается производством и продажей уникальной высококачественной продукции для различных сфер жизни. В ассортимент входят 
                                    швейцарские армейские ножи, кухонные ножи и столовые приборы, часы.
                                </p>
                                <a href='/shop?brand=15'>
                                    <img class='scalecat' src={ go } alt="Купить армейские ножи в Алматы" 
                                        style={{width: '10rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
                                    />
                                </a>
                                <p style={{visibility: 'hidden'}}>___</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col md={6}>
                                <img src={ pol } alt="Купить напольные часы в Алматы" style={{width: '98%', marginBottom: '3%'}}/>
                            </Col>
                            <Col md={6}>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '37px'}}>
                                    Напольные часы появились в 17 веке и сочетали в себе настенные и башенные часы, поскольку их корпус был выполнен в виде 
                                    высокого шкафчика, который утолщался кверху – там находился циферблат, а весь механизм и самое главное маятник были закрыты стенками.
                                </p>
                                <a href='/shop?gender=9'>
                                    <img class='scalecat' src={ go } alt="Купить напольные часы в Алматы" 
                                        style={{width: '10rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
                                    />
                                </a>
                                <p style={{visibility: 'hidden'}}>___</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col md={6}>
                                <img src={ globo } alt="Купить интерьерные глобусы в Алматы" style={{width: '98%', marginBottom: '3%'}}/>
                            </Col>
                            <Col md={6}>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '84px'}}>
                                    Настольный бар-глобус – это уютное хранилище для различных напитков в виде уменьшенной модели Земли, которую можно разместить на столе. 
                                    Красивое изделие со своим «внутренним миром».
                                </p>
                                <a href='/shop?brend=70'>
                                    <img class='scalecat' src={ go } alt="Купить интерьерные глобусы в Алматы" 
                                        style={{width: '10rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
                                    />
                                </a>
                                <p style={{visibility: 'hidden'}}>___</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col md={6}>
                                <img src={ figura } alt="Купить ножи Victorinox в Алматы" style={{width: '98%', marginBottom: '3%'}}/>
                            </Col>
                            <Col md={6}>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '7px'}}>
                                    Дизайн вашего дома – это отражение индивидуальности внутреннего мира его хозяина. Сделать его поистине уникальным помогут статуэтки 
                                    для интерьера, многообразие которых настолько велико, что позволит украсить пространство с неподражаемым изыском.
                                </p>
                                <br></br><p></p>
                                <a href='/shop?brend=68'>
                                    <img class='scalecat' src={ go } alt="Купить ножи Victorinox в Алматы" 
                                        style={{width: '10rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
                                    />
                                </a>
                                <p style={{visibility: 'hidden'}}>___</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col md={6}>
                                <img src={ kaspi } alt="Купить перьевые ручки Parker в Алматы" style={{width: '98%', marginBottom: '3%'}}/>
                            </Col>
                            <Col md={6}>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '45px'}}>
                                    Магазин на Kaspi.kz — это уникальный сервис, с помощью которого покупатели приобретают их по лучшим ценам.
                                    В Нашем Магазине на Kaspi.kz представлен широкий ассортимент товаров: для дома, наруных часов, спорта и туризма.
                                </p>
                                <br></br>
                                <a href='https://kaspi.kz/shop/c/wrist%20watches/?q=%3Acategory%3AWrist%20watches%3AallMerchants%3AGifttime%3AavailableInZones%3AMagnum_ZONE1&sort=relevance&sc=' target='_blank'>
                                    <img class='scalecat' src={ go } alt="Купить перьевые ручки Parker в Алматы" 
                                        style={{width: '10rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
                                    />
                                </a>
                                <p style={{visibility: 'hidden'}}>___</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col md={6}>
                                <img src={ kos } alt="Купить швейцарские комиссионые часы в Алматы" style={{width: '98%', marginBottom: '3%'}}/>
                            </Col>
                            <Col md={6}>
                                <br></br>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '45px'}}>
                                    В Нашем комиссионом магазине на представлен широкий ассортимент наручных швейцарских часов таких брендов: Certina, Tissot, Hamilton, Invicta.
                                </p>
                                <br></br><br></br>
                                <a href='/shop?brand=22'>
                                    <img class='scalecat' src={ go } alt="Купить швейцарские комиссионые часы в Алматы" 
                                        style={{width: '10rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
                                    />
                                </a>
                                <p style={{visibility: 'hidden'}}>___</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    )
}