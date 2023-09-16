import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import clockwoman from "../assets/clockwoman.jpg";
import K2U296L6 from "../assets/categories/K2U296L6.webp"
import EM055482X from "../assets/categories/EM0554-82X.jpeg"
import AK2972MPRG from "../assets/categories/AK2972MPRG.webp"

const ClockWoman = () => {
    return (
        <Container className='mt-4'>
            <div class='hide-on-mobile'>
                <Card style={{display: 'flex', flexWrap: 'nowrap', borderColor: '#1200ba'}}>
                    <Row>
                        <Col md={6}>
                            <div>
                                <p style={{paddingBottom: 2, paddingTop: 5, textAlign: 'center', fontSize: 17}}>В нашем интернет магазине представлены женские модели, которые отличаются усовершенствованным функциональными возможностями, роскошной отделкой и безупречным стилем.</p>
                                <a href='/product/30'><img class='scale' src={ K2U296L6} alt="Купить Calvin Klein K2U296L6 в Алматы" width='23%' style={{marginRight: '8%', marginLeft: '8%'}}/></a>
                                <a href='/product/850'><img class='scale' src={ AK2972MPRG } alt="Купить Anne Klein AK2972MPRG в Алматы" width='24%' style={{marginRight: '8%'}}/></a>
                                <a href='/product/388'><img class='scale' src={ EM055482X } alt="Купить Citizen EM0554-82X в Алматы" width='23%'/></a>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <a href='/shop/?gender=2'><img class='two' src={ clockwoman } alt="Купить мужские часы в Алматы" width='100%' style={{boxShadow: '0 0 6px 6px #1200ba' }} /></a>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
            <div class='show-on-mobile'>
                <Card style={{display: 'flex', flexWrap: 'nowrap', borderColor: '#1200ba'}}>
                    <Row>
                        <Col md={6}>
                            <div>
                                <a href='/shop?gender=2'><img class='two' src={ clockwoman } alt="Купить мужские часы в Алматы" width='100%' style={{boxShadow: '0 0 6px 6px #1200ba' }} /></a>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <p style={{paddingBottom: 2, paddingTop: 5, textAlign: 'center', fontSize: 17}}>В нашем интернет магазине представлены женские модели, которые отличаются усовершенствованным функциональными возможностями, роскошной отделкой и безупречным стилем.</p>
                                <a href='/product/30'><img class='scale' src={ K2U296L6} alt="Купить Calvin Klein K2U296L6 в Алматы" width='23%' style={{marginRight: '8%', marginLeft: '8%'}}/></a>
                                <a href='/product/850'><img class='scale' src={ AK2972MPRG } alt="Купить Anne Klein AK2972MPRG в Алматы" width='24%' style={{marginRight: '8%', marginBottom: '2%'}}/></a>
                                <a href='/product/388'><img class='scale' src={ EM055482X } alt="Купить Citizen EM0554-82X в Алматы" width='23%'/></a>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
        </Container>
    )
}

export default ClockWoman