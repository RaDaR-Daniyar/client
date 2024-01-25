import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import ckslide from "../assets/ck-slide.jpg";
import ck from "../assets/ck.jpg";
import ck2 from "../assets/ck-logo.png"
import tissotslide from "../assets/tissot-slide.jpg";
import tissot from "../assets/tissot.jpg";
import tissot2 from "../assets/tissot-logo.jpg"
import certinaslide from "../assets/certina-slide.jpg";
import certina from "../assets/certina.jpg";
import certina2 from "../assets/certina-logo.jpg"
import orientslide  from "../assets/orient-slide.jpg";
import orient  from "../assets/orient.jpg";
import orient2 from "../assets/orient-logo.png"
import dieselslide from "../assets/diesel-slide.jpg";
import diesel from "../assets/diesel.jpg";
import diesel2 from "../assets/diesel-logo.jpeg"
import casioslide from "../assets/casio-slide.jpg";
import casio from "../assets/casio.jpg";
import casio2 from "../assets/casio-logo.png"
import victorinoxslide from "../assets/victorinox-slide.jpg";
import victorinox from "../assets/victorinox.jpg";
import victorinox2 from "../assets/victorinox-logo.png"
import parkerslide from "../assets/parker-slide.jpg";
import parker from "../assets/parker.jpg";
import parker2 from "../assets/parker-logo.png"
import watermanslide from "../assets/waterman-slide.jpg";
import waterman from "../assets/waterman.jpg";
import waterman2 from "../assets/waterman-logo.png"
import go from "../assets/go2.png";

export default function CarouselBox() {
    return (
        <Container>
            <div class='hide-on-mobile'>
                <Carousel className='b-1'>
                    <Carousel.Item>
                        <img className="b-block w-100" src={ certinaslide } alt="Купить Certina в Алматы"/>
                        <Carousel.Caption className='hide-on-mobile'>
                            <h3 style={{color: "white"}}>Certina</h3>
                            <p style={{color: "white"}}>Швейцарское качество и настоящий спортивный дух - с 1888 года</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="b-block w-100" src={ tissotslide } alt="Купить Tissot в Алматы"/>
                        <Carousel.Caption className='hide-on-mobile'>
                            <h3 style={{color: "white"}}>Tissot</h3>
                            <p style={{color: "white"}}>«Новаторство - наша традиция»</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="b-block w-100" src={ ckslide } alt="Купить Calvin Klein в Алматы"/>
                        <Carousel.Caption className='hide-on-mobile'>
                            <h3 style={{color: "black", textAlign: 'right'}}>Calvin Klein</h3>
                            <p style={{color: "black", textAlign: 'right'}}>Чистота, элегантность и сексуальность — вот основа и фирменный стиль.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="b-block w-100" src={ orientslide } alt="Купить Orient в Алматы" />
                        <Carousel.Caption className='hide-on-mobile'>
                            <h3 style={{textAlign: 'right'}}>Orient</h3>
                            <p style={{textAlign: 'right'}}>Высокое качество, стильный дизайн, популярный во всем мире.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="b-block w-100" src={ dieselslide } alt="Купить Diesel в Алматы" />
                        <Carousel.Caption>
                            <h3>Diesel</h3>
                            <p>Бренд ломающий все стереотипы в головах. Буть смелым.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="b-block w-100" src={ casioslide } alt="Купить Casio в Алматы"/>
                        <Carousel.Caption className='hide-on-mobile'>
                            <h3 style={{color: "white"}}>Casio</h3>
                            <p style={{color: "white"}}>Культурный феномен часового мира!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="b-block w-100" src={ victorinoxslide } alt="Купить Victorinox в Алматы" />
                        <Carousel.Caption className='hide-on-mobile'>
                            <h3 style={{color: "black"}}>Victorinox</h3>
                            <p style={{color: "black"}}>Классически универсальное швейцарское армейское наследие</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="b-block w-100" src={ parkerslide } alt="Купить Parker в Алматы" />
                        <Carousel.Caption className='hide-on-mobile'>
                            <h3>Parker</h3>
                            <p>Яркий представитель легендарного бренда</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="b-block w-100" src={ watermanslide } alt="Купить Waterman в Алматы" />
                        <Carousel.Caption>
                            <h3>Waterman</h3>
                            <p>Разработан, чтобы украсить Ваше воображение.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div class='show-on-mobile'>
                <Carousel className='b-1' interval={2000}>
                    <Carousel.Item>
                        <Row>
                            <Col md={6}>
                                <a href='/shop?brand=4'><img src={ ck } alt="Оригинальная продукция" style={{width: '98%', marginBottom: '3%'}}/></a>
                            </Col>
                            <Col md={6}>
                                <img src={ ck2 } alt="Оригинальная продукция" style={{width: '300px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '1px'}}>
                                    В 1997 году, дизайнерский мир знаменитого американского экспериментатора Calvin Klien пополнился именным часовым брендом, а самый мощный швейцарский концерн 
                                    Swatch Group наконец-то стал устойчивой пирамидой, представленной тремя самодостаточными марками часов.
                                </p>
                                <a href='/calvin_klein'>
                                    <img class='scalecat' src={ go } alt="Купить наручные часы Calvin Klein в Алматы" 
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
                                <a href='/shop?brand=20'><img src={ tissot } alt="Купить наручные часы Tissot в Алматы" style={{width: '98%', marginBottom: '3%'}}/></a>
                            </Col>
                            <Col md={6}>
                                <img src={ tissot2 } alt="Купить наручные часы Tissot в Алматы" style={{width: '210px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '24px'}}>
                                    Марка Tissot была основана в 1853 году Шарлем-Фелисьеном Тиссот и его сыном Шарлем-Эмилем. На протяжении многих лет часы Tissot представляют 
                                    интерес для самого широкого круга любителей качественных часов.
                                </p>
                                <a href='/tissot'>
                                    <img class='scalecat' src={ go } alt="Купить наручные часы Tissot в Алматы" 
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
                                <a href='/shop?brand=22'><img src={ certina } alt="Купить наручные часы Certina в Алматы" style={{width: '98%', marginBottom: '3%'}}/></a>
                            </Col>
                            <Col md={6}>
                                <img src={ certina2 } alt="Купить наручные часы Certina в Алматы" style={{width: '210px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '53px'}}>
                                    История марки началась в 1888 году, когда братья Адольф и Альфред Курт основали в Гренхене небольшую фабрику по производству деталей и часовых механизмов. 
                                </p>
                                <a href='/certina'>
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
                                <a href='/shop?brand=9'><img src={ orient } alt="Купить наручные часы Orient в Алматы" style={{width: '98%', marginBottom: '3%'}}/></a>
                            </Col>
                            <Col md={6}>
                                <img src={ orient2 } alt="Купить наручные часы Orient в Алматы" style={{width: '210px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '53px'}}>
                                    Всемирно известные японские часы Orient выпускает фирма-производитель Orient Watch Co Ltd., основанная еще в 1950 году в Токио. Ранее она носила название 
                                    Тэта Equipment Co. 
                                </p>
                                <a href='/orient'>
                                    <img class='scalecat' src={ go } alt="Купить наручные часы Orient в Алматы" 
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
                                <a href='/shop?brand=5'><img src={ diesel } alt="Купить наручные часы Diesel в Алматы" style={{width: '98%', marginBottom: '3%'}}/></a>
                            </Col>
                            <Col md={6}>
                                <img src={ diesel2 } alt="Купить наручные часы Diesel в Алматы" style={{width: '210px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '37px'}}>
                                    Итальянский бренд Diesel создаёт авангардные fashion-часы с выраженным футуристичным акцентом в дизайне. Нестандартная величина корпуса и броские, провокационные 
                                    элементы циферблата делают часы бренда ярчайшей деталью имиджа.
                                </p>
                                <a href='/diesel'>
                                    <img class='scalecat' src={ go } alt="Купить наручные часы Diesel в Алматы" 
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
                                <a href='/shop?brand=5'><img src={ casio } alt="Купить наручные часы Casio в Алматы" style={{width: '98%', marginBottom: '3%'}}/></a>
                            </Col>
                            <Col md={6}>
                                <img src={ casio2 } alt="Купить наручные часы Casio в Алматы" style={{width: '210px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '84px'}}>
                                    Casio – один из ведущих японских и мировых производителей кварцевых часов. Делает акцент, преимущественно, на аксессуарах 
                                    для спорта и других видов активного времяпровождения.
                                </p>
                                <a href='/diesel'>
                                    <img class='scalecat' src={ go } alt="Купить наручные часы Casio в Алматы" 
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
                                <a href='/shop?brand=15'><img src={ victorinox } alt="Купить ножи Victorinox в Алматы" style={{width: '98%', marginBottom: '3%'}}/></a>
                            </Col>
                            <Col md={6}>
                                <img src={ victorinox2 } alt="Купить ножи Victorinox в Алматы" style={{width: '210px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '7px'}}>
                                    Компания Victorinox занимается производством и продажей уникальной высококачественной продукции для различных сфер жизни. В ассортимент входят 
                                    швейцарские армейские ножи, кухонные ножи и столовые приборы, часы, туристическое снаряжение и парфюмерия.
                                </p>
                                <a href='/victorinox'>
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
                                <a href='/shop?brand=17'><img src={ parker } alt="Купить перьевые ручки Parker в Алматы" style={{width: '98%', marginBottom: '3%'}}/></a>
                            </Col>
                            <Col md={6}>
                                <img src={ parker2 } alt="Купить перьевые ручки Parker в Алматы" style={{width: '210px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '45px'}}>
                                    С 1888 года «PARKER» поддерживает свою репутацию пионера в создании совершенных ручек – как по технологии изготовления, так и по конструктивному решению. 
                                    Сохраняя дух стремления к созданию более надежных перьевых ручек
                                </p>
                                <a href='/parker'>
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
                                <a href='/shop?brand=17'><img src={ waterman } alt="Купить перьевые ручки Waterman в Алматы" style={{width: '98%', marginBottom: '3%'}}/></a>
                            </Col>
                            <Col md={6}>
                                <img src={ waterman2 } alt="Купить перьевые ручки Waterman в Алматы" style={{width: '200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                                <p style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '45px'}}>
                                    Умело сделанная во Франции, каждая ручка Waterman вдохновенно вторит гению основателя Waterman, Льюиса Эдсона, изобретателя первой надежной авторучки в 1883. Перьевые 
                                    ручки Waterman продолжают вызывать интерес у состоятельных людей.
                                </p>
                                <a href='/waterman'>
                                    <img class='scalecat' src={ go } alt="Купить перьевые ручки часы Waterman в Алматы" 
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