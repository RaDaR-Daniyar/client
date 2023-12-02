import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import ck from "../assets/ck.jpg";
import ck2 from "../assets/ck-logo.png"
import tissot from "../assets/tissot.jpeg";
import tissot2 from "../assets/tissot-logo.jpg"
import certina from "../assets/certina.jpg";
import certina2 from "../assets/certina-logo.jpg"
import orient  from "../assets/orient.jpg";
import orient2 from "../assets/orient-logo.png"
import diesel from "../assets/diesel.jpg";
import diesel2 from "../assets/diesel-logo.jpeg"
import casio from "../assets/casio.jpg";
import casio2 from "../assets/casio-logo.png"
import victorinox from "../assets/victorinox.jpg";
import victorinox2 from "../assets/victorinox-logo.png"
import parker from "../assets/parker.jpg";
import parker2 from "../assets/parker-logo.png"
import waterman from "../assets/waterman.jpg";
import waterman2 from "../assets/waterman-logo.png"
import go from "../assets/go2.png";

export default function CarouselBox() {
    return (
        <Container>
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
        </Container>
    )
}