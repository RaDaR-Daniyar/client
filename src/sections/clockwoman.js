import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import clockwoman from "../assets/clockwoman.jpg";
import K2U296L6 from "../assets/categories/K2U296L6.webp"
import EM055482X from "../assets/categories/EM0554-82X.png"
import AK2972MPRG from "../assets/categories/AK2972MPRG.webp"
import AK3102MPGB from "../assets/categories/AK3102MPGB.png"
import SVOK100M from "../assets/categories/SVOK100M.png"
import K7A236LH from "../assets/categories/K7A236LH.png"
import T050 from "../assets/categories/T050.png"
import K7W2M116 from "../assets/categories/K7W2M116.png"
import С014 from "../assets/categories/С014.png"
import REND0101S00B from "../assets/categories/REND0101S00B.png"
import C014 from "../assets/categories/C014.png"
import AK1952RGST from "../assets/categories/AK1952RGST.png"
import Marquee from 'react-fast-marquee';

const ClockWoman = () => {
    return (
        <Container className='mt-4'>
            <div class='hide-on-mobile'>
                <Card style={{display: 'flex', flexWrap: 'nowrap', borderColor: '#1200ba'}}>
                    <Row>
                        <Col md={6}>
                            <p style={{paddingBottom: 2, paddingTop: 5, textAlign: 'center', fontSize: 17}}>В нашем интернет магазине представлены женские модели, которые отличаются усовершенствованным функциональными возможностями, роскошной отделкой и безупречным стилем.</p>  
                            <Marquee pauseOnHover speed={100} style={{margin: '2%', width: '96%', height: 256}}>
                                <div>
                                    <a href='/product/30'><img class='scale' src={ K2U296L6} alt="Купить женские часы Calvin Klein K2U296L6 в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/850'><img class='scale' src={ AK2972MPRG } alt="Купить женские часы Anne Klein AK2972MPRG в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/388'><img class='scale' src={ EM055482X } alt="Купить женские часы Citizen EM0554-82X в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/655'><img class='scale' src={ SVOK100M} alt="Купить женские часы Swatch SVOK100M в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/112'><img class='scale' src={ K7A236LH } alt="Купить женские часы Calvin Klein K7A236LH в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/859'><img class='scale' src={ AK3102MPGB } alt="Купить женские часы Anne Klein AK3102MPGB в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2261'><img class='scale' src={ T050} alt="Купить женские часы Tissot T050 в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/133'><img class='scale' src={ K7W2M116 } alt="Купить женские часы Calvin Klein K7W2M116 в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2397'><img class='scale' src={ С014 } alt="Купить женские часы Certina С014 в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1127'><img class='scale' src={ REND0101S00B} alt="Купить женские часы Orient RE-ND0101S00B в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2367'><img class='scale' src={ C014 } alt="Купить женские часы Certina C014 в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                                <div>
                                    <a href='/product/834'><img class='scale' src={ AK1952RGST } alt="Купить женские часы Anne Klein AK1952RGST в Алматы" style={{height: '220px', marginLeft: 50}}/></a>
                                </div>
                            </Marquee>
                        </Col>
                        <Col md={6}>
                            <div>
                                <a href='/shop/?gender=2'><img class='two' src={ clockwoman } alt="Купить женские часы в Алматы" width='100%' style={{boxShadow: '0 0 6px 6px #1200ba' }} /></a>
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
                                <a href='/shop?gender=2'><img class='two' src={ clockwoman } alt="Купить женские часы в Алматы" width='100%' style={{boxShadow: '0 0 6px 6px #1200ba' }} /></a>
                            </div>
                        </Col>
                        <Col md={6}>
                        <p style={{paddingTop: 5, textAlign: 'center', fontSize: 17}}>В нашем интернет магазине представлены женские модели, которые отличаются усовершенствованным функциональными возможностями, роскошной отделкой и безупречным стилем.</p>
                            <Marquee pauseOnHover speed={100} style={{width: '96%', height: 156}}>
                                <div>
                                    <a href='/product/30'><img class='scale' src={ K2U296L6} alt="Купить женские часы Calvin Klein K2U296L6 в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/810'><img class='scale' src={ AK2972MPRG } alt="Купить женские часы Anne Klein AK2972MPRG в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/388'><img class='scale' src={ EM055482X } alt="Купить женские часы Citizen EM0554-82X в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/655'><img class='scale' src={ SVOK100M} alt="Купить женские часы Swatch SVOK100M в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/112'><img class='scale' src={ K7A236LH } alt="Купить женские часы Calvin Klein K7A236LH в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/859'><img class='scale' src={ AK3102MPGB } alt="Купить женские часы Anne Klein AK3102MPGB в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2261'><img class='scale' src={ T050} alt="Купить женские часы Tissot K2U296L6 в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/133'><img class='scale' src={ K7W2M116 } alt="Купить женские часы Calvin Klein K7W2M116 в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2397'><img class='scale' src={ С014 } alt="Купить женские часы Certina EM0554-82X в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/1127'><img class='scale' src={ REND0101S00B} alt="Купить женские часы Orient K2U296L6 в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/2367'><img class='scale' src={ C014 } alt="Купить женские часы Certina AK2972MPRG в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                                <div>
                                    <a href='/product/834'><img class='scale' src={ AK1952RGST } alt="Купить женские часы Anne Klein AK2972MPRG в Алматы" style={{height: '150px', marginLeft: 20}}/></a>
                                </div>
                            </Marquee>
                        </Col>
                    </Row>
                </Card>
            </div>
        </Container>
    )
}

export default ClockWoman