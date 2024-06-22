import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import pen from "../assets/pen.jpg";
import P1931494 from "../assets/categories/1931494.webp"
import S0637020 from "../assets/categories/S0637020.webp"
import L4000460 from "../assets/categories/4000460.png"
import P2143639 from "../assets/categories/2143639.png"
import S0952440 from "../assets/categories/S0952440.png"
import L4026562 from "../assets/categories/4026562.png"
import P2143634 from "../assets/categories/2143634.png"
import W1904560 from "../assets/categories/1904560.png"
import Marquee from 'react-fast-marquee';

const Pen = () => {
    return (
        <Container className='mt-4'>
            <Card style={{borderColor: '#1200ba'}}>
                <Row>
                <Col md={6}>
                        <div>
                            <a href='/shop?brend=1'><img class='two' src={ pen } alt="Купить ручки в Алматы" width='100%' style={{boxShadow: '0 0 6px 6px #1200ba' }} /></a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <p style={{paddingBottom: 2, paddingTop: 5, textAlign: 'center', fontSize: 17}}>Перьевые ручки Parker, Waterman и Lamy известны каждому, кто ценит роскошные и качественные аксессуары, выполненные в стильном дизайне.</p>
                        <div class='hide-on-mobile'>
                            <Marquee class pauseOnHover speed={100} style={{margin: '2%', width: '96%', height: 256}}>
                                <div>
                                    <a href='/product/1150'><img class='scale' src={ P1931494 } alt="Купить перьевую ручку Parker 1931494 в Алматы" style={{height: '220px', marginLeft: 80}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1903'><img class='scale' src={ S0637020 } alt="Купить перьевую ручку Waterman S0637020 в Алматы" style={{height: '220px', marginLeft: 40}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1854'><img class='scale' src={ L4000460 } alt="Купить перьевую ручку Lamy 4000460 в Алматы" style={{height: '220px', marginLeft: 40}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1692'><img class='scale' src={ P2143634 } alt="Купить роллер ручку Parker 2143634 в Алматы" style={{height: '220px', marginLeft: 40}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1872'><img class='scale' src={ W1904560 } alt="Купить роллер ручку Waterman 1904560 в Алматы" style={{height: '220px', marginLeft: 40}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1698'><img class='scale' src={ P2143639 } alt="Купить шариковую ручку Parker 2143639 в Алматы" style={{height: '220px', marginLeft: 40}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2034'><img class='scale' src={ S0952440 } alt="Купить шариковую ручку Waterman S0952440 в Алматы" style={{height: '220px', marginLeft: 40}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2047'><img class='scale' src={ L4026562 } alt="Купить шариковую ручку Lamy 4026562 в Алматы" style={{height: '220px', marginLeft: 20}}/></a>
                                </div>
                            </Marquee>
                        </div>
                        <div class='show-on-mobile'>
                            <Marquee class pauseOnHover speed={100} style={{margin: '2%', width: '96%', height: 156}}>
                                <div>
                                    <a href='/product/1150'><img class='scale' src={ P1931494 } alt="Купить перьевую ручку Parker 1931494 в Алматы" style={{height: '150px', marginLeft: 50,}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1903'><img class='scale' src={ S0637020 } alt="Купить перьевую ручку Waterman S0637020 в Алматы" style={{height: '150px', marginLeft: 10}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1854'><img class='scale' src={ L4000460 } alt="Купить перьевую ручку Lamy 4000460 в Алматы" style={{height: '150px', marginLeft: 10}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1692'><img class='scale' src={ P2143634 } alt="Купить роллер ручку Parker 2143634 в Алматы" style={{height: '150px', marginLeft: 10}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1872'><img class='scale' src={ W1904560 } alt="Купить роллер ручку Waterman 1904560 в Алматы" style={{height: '150px', marginLeft: 10}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1698'><img class='scale' src={ P2143639 } alt="Купить шариковую ручку Parker 2143639 в Алматы" style={{height: '150px', marginLeft: 10}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2034'><img class='scale' src={ S0952440 } alt="Купить шариковую ручку Waterman S0952440 в Алматы" style={{height: '150px', marginLeft: 10}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2047'><img class='scale' src={ L4026562 } alt="Купить шариковую ручку Lamy 4026562 в Алматы" style={{height: '150px', marginLeft: 0}}/></a>
                                </div>
                            </Marquee>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default Pen