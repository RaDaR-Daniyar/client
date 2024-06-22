import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import victorinox from "../assets/victorinox-knife.jpg";
import MWN08623 from "../assets/categories/0.8623.MWN.webp"
import V0824126 from "../assets/categories/0.8241.26.webp"
import V06223841 from "../assets/categories/0.6223.841.webp"
import V0622394B1 from "../assets/categories/0.6223.94B1.png"
import V06226T from "../assets/categories/06226T.webp"
import V0642163 from "../assets/categories/0642163.png"
import V06385 from "../assets/categories/06385.png"
import V08331MC9 from "../assets/categories/08331MC9.png"
import V0956163 from "../assets/categories/0956163.png"
import Marquee from 'react-fast-marquee';

const Knife = () => {
    return (
        <Container className='mt-4'>
            <div class='hide-on-mobile'>
                <Card style={{borderColor: '#1200ba'}}>
                    <Row>
                        <Col md={6}>
                            <p style={{paddingBottom: 10, textAlign: 'center', fontSize: 17}}>Компания Victorinox занимается производством уникальной высококачественной продукции для различных сфер жизни.</p>  
                            <Marquee class pauseOnHover speed={100} style={{margin: '2%', width: '96%', height: 256}}>
                                <div>
                                    <a href='/product/1186'><img class='scale' src={ V06223841 } alt="Купить армейский нож Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1194'><img class='scale' src={ V0622394B1 } alt="Купить армейский нож Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1209'><img class='scale' src={ V06226T } alt="Купить армейский нож Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1257'><img class='scale' src={ V0642163 } alt="Купить армейский нож Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1225'><img class='scale' src={ V06385 } alt="Купить армейский нож Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1304'><img class='scale' src={ V08331MC9 } alt="Купить армейский нож Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1346'><img class='scale' src={ V0956163 } alt="Купить армейский нож Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1337'><img class='scale' src={ MWN08623 } alt="Купить армейский нож Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1302'><img class='scale' src={ V0824126 } alt="Купить армейский нож Waterman Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                </div>
                            </Marquee>
                        </Col>
                        <Col md={6}>
                            <div>
                                <a href='/shop?brand=15'><img class='two' src={ victorinox } alt="Купить victorinox в Алматы" width='100%' style={{boxShadow: '0 0 6px 6px #1200ba' }} /></a>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
            <div class='show-on-mobile'>
                <Card style={{borderColor: '#1200ba'}}>
                    <Row>
                        <Col md={6}>
                            <div>
                                <a href='/shop?brand=15'><img class='two' src={ victorinox } alt="Купить victorinox в Алматы" width='100%' style={{boxShadow: '0 0 6px 6px #1200ba' }} /></a>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <p style={{textAlign: 'center', fontSize: 17}}>Компания Victorinox занимается производством уникальной высококачественной продукции для различных сфер жизни.</p>
                                <Marquee class pauseOnHover speed={100} style={{margin: '2%', width: '96%', height: 256}}>
                                    <div>
                                        <a href='/product/1186'><img class='scale' src={ V06223841 } alt="Купить армейский нож Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                    </div>
                                    <div>
                                        <a href='/product/1194'><img class='scale' src={ V0622394B1 } alt="Купить армейский нож Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                    </div>
                                    <div>
                                        <a href='/product/1209'><img class='scale' src={ V06226T } alt="Купить армейский нож Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                    </div>
                                    <div>
                                        <a href='/product/1257'><img class='scale' src={ V0642163 } alt="Купить армейский нож Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                    </div>
                                    <div>
                                        <a href='/product/1225'><img class='scale' src={ V06385 } alt="Купить армейский нож Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                    </div>
                                    <div>
                                        <a href='/product/1304'><img class='scale' src={ V08331MC9 } alt="Купить армейский нож Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                    </div>
                                    <div>
                                        <a href='/product/1346'><img class='scale' src={ V0956163 } alt="Купить армейский нож Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                    </div>
                                    <div>
                                        <a href='/product/1337'><img class='scale' src={ MWN08623 } alt="Купить армейский нож Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                    </div>
                                    <div>
                                        <a href='/product/1302'><img class='scale' src={ V0824126 } alt="Купить армейский нож Waterman Victorinox в Алматы" style={{height: '220px', marginLeft: 30}}/></a>
                                    </div>
                                </Marquee>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
        </Container>
    )
}

export default Knife