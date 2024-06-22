import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import clockman from "../assets/clockman.jpg";
import KAM27146 from "../assets/categories/KAM27146.webp"
import RAAK0403N10B from "../assets/categories/RA-AK0403N10B.webp"
import AN360059L from "../assets/categories/AN3600-59L.webp"
import RABA0004S10B from "../assets/categories/RABA0004S10B.png"
import DZ7221 from "../assets/categories/DZ7221.webp"
import I14413 from "../assets/categories/14413.png"
import T011 from "../assets/categories/T011.png"
import H77726151 from "../assets/categories/H77726151.png"
import C001 from "../assets/categories/C001.png"
import RAAC0N02Y10B from "../assets/categories/RA-AC0N02Y10B.png"
import JY808581E from "../assets/categories/JY8085-81E.webp"
import AE1200WHD1AVDF from "../assets/categories/AE-1200WHD-1AVDF.png"
import './style.css'
import Marquee from 'react-fast-marquee';

const ClockMan = () => {
    return (
        <Container className='mt-4'>
            <Card style={{borderColor: '#1200ba'}}>
                <Row>
                    <Col md={6}>
                        <div>
                            <a href='/shop?gender=3'><img class='two' src={ clockman } alt="Купить мужские часы в Алматы" width='100%' style={{boxShadow: '0 0 6px 6px #1200ba'}} /></a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <p style={{paddingBottom: 2, paddingTop: 5, textAlign: 'center', fontSize: 17}}>Большой выбор ассортимент моделей мужских часов от традиционных классических до инновационных спортивных.</p> 
                        <div class='hide-on-mobile'>
                            <Marquee class pauseOnHover speed={100} style={{margin: '2%', width: '96%', height: 256}}>
                                <div>
                                    <a href='/product/205'><img class='scale'  src={ AN360059L } alt="Купить мужские часы Citizen FET0P004W0 в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/186'><img class='scale' src={ KAM27146 } alt="Купить мужские часы Calvin Klein KAM27146 в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1028'><img class='scale' src={ RAAK0403N10B } alt="Купить мужские часы Orient FET0P004W0 в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1059'><img class='scale' src={ RABA0004S10B} alt="Купить мужские часы Orient RABA0004S10B в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/86'><img class='scale' src={ DZ7221 } alt="Купить мужские часы Diesel DZ7221 в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2465'><img class='scale' src={ I14413 } alt="Купить мужские часы Invicta AK3102MPGB в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2241'><img class='scale' src={ T011} alt="Купить мужские часы Tissot T011.414.17.051.00 в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2318'><img class='scale' src={ H77726151 } alt="Купить мужские часы Hamilton H77726151 в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2327'><img class='scale' src={ C001 } alt="Купить мужские часы Certina C001.427.16.037.01 в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1011'><img class='scale' src={ RAAC0N02Y10B} alt="Купить мужские часы Orient RA-AC0N02Y10B в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/450'><img class='scale' src={ JY808581E } alt="Купить мужские часы Certina JY8085-81E в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2401'><img class='scale' src={ AE1200WHD1AVDF } alt="Купить мужские часы Casio AE-1200WHD-1AVDF в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                            </Marquee>
                        </div>
                        <div class='show-on-mobile'>
                            <Marquee class pauseOnHover speed={100} style={{margin: '2%', width: '96%', height: 156}}>
                                <div>
                                    <a href='/product/205'><img class='scale'  src={ AN360059L } alt="Купить мужские часы Citizen FET0P004W0 в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/186'><img class='scale' src={ KAM27146 } alt="Купить мужские часы Calvin Klein KAM27146 в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1028'><img class='scale' src={ RAAK0403N10B } alt="Купить мужские часы Orient FET0P004W0 в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1059'><img class='scale' src={ RABA0004S10B} alt="Купить мужские часы Orient RABA0004S10B в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/86'><img class='scale' src={ DZ7221 } alt="Купить мужские часы Diesel DZ7221 в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2465'><img class='scale' src={ I14413 } alt="Купить мужские часы Invicta AK3102MPGB в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2241'><img class='scale' src={ T011} alt="Купить мужские часы Tissot T011.414.17.051.00 в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2318'><img class='scale' src={ H77726151 } alt="Купить мужские часы Hamilton H77726151 в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2327'><img class='scale' src={ C001 } alt="Купить мужские часы Certina C001.427.16.037.01 в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1011'><img class='scale' src={ RAAC0N02Y10B} alt="Купить мужские часы Orient RA-AC0N02Y10B в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/420'><img class='scale' src={ JY808581E } alt="Купить мужские часы Certina JY8085-81E в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2401'><img class='scale' src={ AE1200WHD1AVDF } alt="Купить мужские часы Casio AE-1200WHD-1AVDF в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                            </Marquee>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default ClockMan