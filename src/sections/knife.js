import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import victorinox from "../assets/victorinox-knife.jpg";
import MWN08623 from "../assets/categories/0.8623.MWN.webp"
import V0824126 from "../assets/categories/0.8241.26.webp"

const Knife = () => {
    return (
        <Container className='mt-4'>
            <div class='hide-on-mobile'>
                <Card style={{borderColor: '#1200ba'}}>
                    <Row>
                        <Col md={6}>
                            <div>
                                <p style={{paddingBottom: 50, textAlign: 'center', fontSize: 17}}>Компания Victorinox занимается производством уникальной высококачественной продукции для различных сфер жизни.</p>
                                <a href='/product/1337'><img class='scale' src={ MWN08623 } alt="Купить  армейский нож Victorinox в Алматы" width='47%' style={{marginRight: '3%'}}/></a>
                                <a href='/product/1302'><img class='scale' src={ V0824126 } alt="Купить  армейский нож Waterman Victorinox в Алматы" width='47%' style={{marginRight: '3%'}}/></a>
                            </div>
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
                                <p style={{paddingBottom: 50, textAlign: 'center', fontSize: 17}}>Компания Victorinox занимается производством уникальной высококачественной продукции для различных сфер жизни.</p>
                                <a href='/product/1337'><img class='scale' src={ MWN08623 } alt="Купить армейский нож Victorinox в Алматы" width='47%' style={{marginRight: '3%'}}/></a>
                                <a href='/product/1302'><img class='scale' src={ V0824126 } alt="Купить армейский нож Victorinox в Алматы" width='47%' style={{marginRight: '3%'}}/></a>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
        </Container>
    )
}

export default Knife