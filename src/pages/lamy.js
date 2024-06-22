import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet'
import lamy from "../assets/lamy-logo.jpg"
import lamypen from "../assets/lamy1.jpg"
import lamyp from "../assets/lamy2.jpg"
import go from "../assets/go.png";

const Lamy = () => {
    return (
        <Container>
            <Helmet>
                <title>Купить ручки Lamy в Алматы - Aksessuary.KZ</title>
                <meta name="description" content="Lamy — это немецкий бренд пишущих инструментов с 85-летней историей. Все началось с маленькой фабрики в Гейдельберге. 
                    Сейчас Lamy знают по всему миру — бренд давно стал одним из лидеров рынка с производством более 7 миллионов пишущих инструментов в год."/>
                <meta name="keywords" content="купить ручки Lamy в Алматы, купить перьевые ручки Lamy в Алматы, купить перьевые ручки Lamy в Казахстане, 
                    перьевые ручки Lamy, Lamy, ручки Lamy в Алматы, ручка Lamy, ручки, перьевые ручки, Lamy" />
            </Helmet>
            <Card style={{borderColor: '#1200ba'}}>
                <img src={ lamy } alt="Купить перьевые ручки Lamy в Алматы"  width='40%' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Lamy — это немецкий бренд пишущих инструментов с 85-летней историей. Все началось с маленькой фабрики в Гейдельберге. Сейчас 
                    Lamy знают по всему миру — бренд давно стал одним из лидеров рынка с производством более 7 миллионов пишущих инструментов в год.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Ручки Lamy сочетают лучшие инженерные решения, современный стильный дизайн и немецкое качество. Брэнд получил самое большое количество 
                    дизайнерских наград: пишущие инструменты — воплощение принципа Баухауз. Здесь соединяются функциональность и стиль. Яркость цветов и разнообразие 
                    моделей привлекают внимание, кроме эстетических свойств они обладают продуманной эргономикой. Ручками невероятно удобно работать, компания занимается 
                    разработкой всех инженерных инноваций совместно с психологами и физиологами. Конструкция разработана таким образом, чтобы формировать правильный 
                    захват и красивый почерк.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Высочайшее качество технологий и процессов производства делают пишущие инструменты незаменимыми спутниками любого творческого человека. 
                    Lamy — оптимальное соответствие цены и качества. Используемые материалы рассчитаны на долгое использование ручек. После продолжительных рутинных 
                    записей рука не будет уставать — производители сделали для этого все возможное. Бренд тщательно следит за качеством изделий: перья и стержни обязательно 
                    тестируют. При любом несоответствии эталону они отбраковываются. Вы всегда на 100% можете быть уверены в качестве Lamy.
                </p>
                <h4 style={{textAlign: 'center', color: 'red'}}>В случае возникновения вопросов или проблем с поиском нужной продукции свяжитесь с нами!</h4>
                <Row style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px', marginTop: '10px'}}>
                    <Col md={8}>
                        <img src={ lamypen } alt="Купить ручки Lamy в Алматы" width='100%' style={{marginBottom: 10}}/>
                    </Col>
                    <Col md={4}>
                        <img src={ lamyp } alt="Купить перьевые ручки Lamy в Алматы" width='100%'/>
                    </Col>
                </Row>
                <a href='/shop?brand=18'>
                    <img class='scalecat' src={ go } alt="Купить наручные часы Anne Kleinx в Алматы" 
                        style={{width: '12em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} 
                    />
                </a>
            </Card>
        </Container>
    )
}

export default Lamy