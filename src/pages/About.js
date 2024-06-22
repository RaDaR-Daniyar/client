import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from "react-helmet"
import ck from "../assets/marquee/ck.png";
import ak from "../assets/marquee/ak.png";
import swatch from "../assets/marquee/swatch.png";
import orient from "../assets/marquee/orient.png";
import citizen from "../assets/marquee/citizen.png";
import diesel from "../assets/marquee/diesel.png";
import parker from "../assets/marquee/parker.png";
import waterman from "../assets/marquee/waterman.png";
import lamy from "../assets/marquee/lamy.png";
import victorinox from "../assets/marquee/victorinox.png";
import certina from "../assets/marquee/certina.png";
import tissot from "../assets/marquee/tissot.png";
import hamilton from "../assets/marquee/hamilton.png";
import invicta from "../assets/marquee/invicta.png";
import casio from "../assets/marquee/casio.png";
import clock from "../assets/clock-shop.jpg";
import pen from "../assets/pen-shop.jpg";
import knife from "../assets/knife-shop.jpg";
import Marquee from 'react-fast-marquee';

const About = () => {
    return (
        <Container>
            <Helmet>
                <title>О интернет магазине наручных часов - Aksessuary.KZ</title>
                <meta name="description" content="Интернет-магазин часов Aksessuary.KZ предлагает собственный товар, представленный в наших магазинах, а не занимаемся 
                    реализацией часов сторонних компаний, к которым мы не имеем отношение. Группа наших компаний является эксклюзивным представителем ведущих мировых 
                    часовых брендов на территории Средней Азии и Казахстана, а это значит, что мы всегда сможем предложить самые лучшие, выгодные и интересные решения 
                    для наших клиентов. Модельный ряд наручных часов и аксессуаров, предлагаемый компанией, насчитывает более 5 тысяч наименований и охватывает все 
                    возможные типы продукции, в том числе: мужские часы, женские часы, детские часы, спортивные часы, модные часы, перьевые ручки и шариковые ручки Parker, Waterman и Lamy,
                    Швейцарские армейские ножи и столовые приборы Victorinox"/>
                <meta name="keywords" content="купить японские наручные часы в Алматы, купить швейарские наручные часы в Алматы, наручные часы в Алматы, часы в Алматы,
                    купить наручные часы, наручные часы, часы, купить мужские часы, купить женские часы, мужские часы, женские часы, детские часы, спортивные часы, модные часы, перьевые ручки и шариковые ручки Parker, Waterman и Lamy,
                    Швейцарские армейские ножи и столовые приборы Victorinox" />
            </Helmet>
            <Card style={{padding: '2%', borderColor: '#1200ba'}}>
                <Row>
                    <Col md={4}>
                        <img src={ clock } alt="Купить наручные часы в Алматы" width='100%' style={{marginBottom: 5}} />
                    </Col>
                    <Col md={4}>
                        <img src={ pen } alt="Купить наручные часы в Алматы" width='100%' style={{marginBottom: 5}} />
                    </Col>
                    <Col md={4}>
                        <img src={ knife } alt="Купить наручные часы в Алматы" width='100%' />  
                    </Col>
                </Row>
            </Card>
            <Card className='mt-4' style={{padding: '2%', borderColor: '#1200ba'}}>
                <h4 style={{textAlign: 'center'}}>Дорогие друзья!</h4>
                <p> Интернет-магазин часов Aksessuary.KZ предлагает собственный товар, представленный 
                    в наших магазинах, а не занимаемся реализацией часов сторонних компаний, к которым мы не имеем отношение. Группа наших компаний является эксклюзивным 
                    представителем ведущих мировых часовых брендов на территории Средней Азии и Казахстана, а это значит, что мы всегда сможем предложить самые лучшие, выгодные и 
                    интересные решения для наших клиентов.
                </p>
                <p> Для реализации проекта была подобрана команда профессионалов с многолетним опытом в часовом бизнесе. Наши консультанты постоянно повышают уровень знаний о часах, 
                    проходят обучение на фабриках-изготовителях, следят за последними тенденциями в часовом мире. Модельный ряд часов и аксессуаров, предлагаемый компанией, насчитывает 
                    более 5 тысяч наименований и охватывает все возможные типы продукции, в том числе:
                    <ul>
                        <li>Мужские часы</li>
                        <li>Женские часы</li>
                        <li>Детские часы</li>
                        <li>Спортивные часы</li>
                        <li>Модные часы</li>
                        <li>Перьевые и шариковые ручки Parker, Waterman и Lamy</li>
                        <li>Швейцарские армейские ножи и столовые приборы Victorinox</li>
                    </ul>
                </p>
            </Card>
            <Card className='mt-4' style={{padding: '2%', textAlign: 'center', borderColor: '#1200ba'}}>
                <h4 style={{fontWeight: 'normal'}}>Наша миссия – сделать все возможное для облегчения выбора и экономии времени и денег наших клиентов при покупке часов.</h4>
                <h4 style={{fontWeight: 'normal'}}>Желаем Вам приятных и ярких покупок!</h4>
            </Card>
            <Card className='mt-4' style={{borderColor: '#1200ba'}}>
                <h1 style={{textAlign: 'center', fontWeight: 'normal'}}>Бренды</h1>
                <Marquee pauseOnHover speed={200} style={{margin: '2%', width: '96%', height: 360}}>
                    <div>
                        <a href='/shop?brand=22'><img class='scale' src={ certina } alt="Купить часы Certina в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/shop?brand=20'><img class='scale' src={ tissot } alt="Купить часы Tissot в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/shop?brand=1'><img class='scale' src={ ck } alt="Купить часы Calvin Klein в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/shop?brand=21'><img class='scale' src={ hamilton } alt="Купить часы Hamilton в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div> 
                        <a href='/shop?brand=2'><img class='scale' src={ ak } alt="Купить часы Anne Klein в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>    
                        <a href='/shop?brand=8'><img class='scale' src={ swatch } alt="Купить часы Swatch в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/shop?brand=23'><img class='scale' src={ invicta } alt="Купить часы Invicta в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/shop?brand=19'><img class='scale' src={ casio } alt="Купить часы Casio в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/shop?brand=6'><img class='scale' src={ orient } alt="Купить часы Orient в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/shop?brand=3'><img class='scale' src={ citizen } alt="Купить часы Citizen в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/shop?brand=4'><img class='scale' src={ diesel } alt="Купить часы Diesel в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/shop?brand=7'><img class='scale' src={ parker } alt="Купить ручку Parker в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/shop?brand=10'><img class='scale' src={ waterman } alt="Купить ручку Waterman в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/shop?brand=5'><img class='scale' src={ lamy } alt="Купить ручку Lamy в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                    <div>
                        <a href='/shop?brand=9'><img class='scale' src={ victorinox } alt="Купить набор Victorinox в Алматы" style={{height: '320px', marginLeft: 50}} /></a>
                    </div>
                </Marquee>
            </Card>
        </Container>
    )
}

export default About