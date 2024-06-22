import { Carousel, Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import garant from "../assets/about/garant.png"
import dostavka from "../assets/about/dostavka.png"
import original from "../assets/about/original.png"
import kaspi from "../assets/about/kaspi.png"
import ck from "../assets/about/ck.png"
import swatch from "../assets/about/swatch.png"
import citizen from "../assets/about/citizen.png"
import diesel from "../assets/about/diesel.png"

const About = () => {
    return (
        <Container className='mt-4'>
            <Row>
                <Col md={2}>
                    <div class='hide-on-mobile'>
                        <h2 style={{marginTop: '2%', fontFamily: 'Book Antiqua', fontWeight: 'bold', color: '#1200ba'}}>Почему выбирают нас?</h2>
                    </div>
                    <div class='show-on-mobile'>
                        <h2 style={{textAlign: 'center', marginBottom: '4%', marginTop: '-10%', fontFamily: 'Book Antiqua', fontWeight: 'bold', color: '#1200ba'}}>Почему выбирают нас?</h2>
                    </div>
                </Col>
                <Col md={5}>
                    <div class='hide-on-mobile'>
                        <a href='/shop'><img class='scalecat' src={ original } alt="Оригинальная продукция" style={{width: '47%', marginBottom: '3%'}}/></a>
                        <a href='/service'><img class='scalecat' src={ garant } alt="Международная гарантия" style={{width: '47%', marginLeft: '20px', marginBottom: '3%'}}/></a>
                    </div>
                    <div class='show-on-mobile'>
                        <a href='/shop'><img class='scalemobile' src={ original } alt="Оригинальная продукция" style={{width: '47%', marginBottom: '3%'}}/></a>
                        <a href='/service'><img class='scalemobile' src={ garant } alt="Международная гарантия" style={{width: '47%', marginLeft: '20px', marginBottom: '3%'}}/></a>
                    </div>
                </Col>
                <Col md={5}>
                    <div class='hide-on-mobile'>
                        <a href='/delivery'><img class='scalecat' src={ dostavka } alt="Международная гарантия" style={{width: '47%', marginBottom: '3%'}}/></a>
                        <a href='/delivery'><img class='scalecat' src={ kaspi } alt="Международная гарантия" style={{width: '47%', marginLeft: '20px', marginBottom: '3%'}}/></a>
                    </div>
                    <div class='show-on-mobile'>
                        <a href='/delivery'><img class='scalemobile' src={ dostavka } alt="Международная гарантия" style={{width: '47%', marginBottom: '3%'}}/></a>
                        <a href='/delivery'><img class='scalemobile' src={ kaspi } alt="Международная гарантия" style={{width: '47%', marginLeft: '20px', marginBottom: '3%'}}/></a>
                    </div>
                </Col>
            </Row>
            <div class='hide-on-mobile'>
                <h2 style={{textAlign: 'center', marginTop: '2%', color: '#1200ba', fontFamily: 'Book Antiqua', fontWeight: 'bold'}}>Интернет-магазин "Aksessuary.KZ"</h2>
                <p style={{textAlign: 'justify', fontSize: 17}}>Является официальным дистрибьютором на территории Республики Казахстан 
                    представленных брендов. Мы несём полную ответственность за нашу продукцию и гарантируем её подлинность и качество. До того, как товар поступает к нам 
                    в магазин, мы тщательно отбираем каждую модель на предмет дизайна, качества материалов и механизма. Мы предлагаем только те часы, которые бы носили 
                    сами или дарили близким нам людям.
                    На каждом этапе выбора часов, мы будем рады помочь вам и проконсультировать. Нам не терпится ответить на все ваши вопросы и 
                    помочь найти часы, которыми вы с гордостью будете владеть долгие годы. Мы относимся серьезно к работе, в 
                    первую очередь, потому что любим наше дело.
                </p>
            </div>
            <div>
                <h2 style={{textAlign: 'center', color: '#1200ba', fontFamily: 'Book Antiqua', fontWeight: 'bold'}}>Акции</h2>
                <Carousel className='b-1' interval={2000}> 
                    <Carousel.Item>
                        <Row style={{marginTop: '20px'}}>
                            <Col md={6}>
                                <a href='/shop?brand=4'><img class='scalecat' src={ ck } alt="Скидки на часы Calvin Klein" style={{width: '98%', marginBottom: '3%'}}/></a>
                            </Col>
                            <Col md={6}>
                                <a href='/shop?brand=3'><img class='scalecat' src={ citizen } alt="Скидки на часы Citizen" style={{width: '98%', marginBottom: '3%'}}/></a>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row style={{marginTop: '20px'}}>
                            <Col md={6}>
                                <a href='/shop?brand=11'><img class='scalecat' src={ swatch } alt="Скидки на часы Swatch" style={{width: '98%', marginBottom: '3%'}}/></a>
                            </Col>
                            <Col md={6}>
                                <a href='/shop?brand=5'><img class='scalecat' src={ diesel } alt="Скидки на часы Diesel" style={{width: '98%', marginBottom: '3%'}}/></a>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </div>

        </Container>
    )
}

export default About