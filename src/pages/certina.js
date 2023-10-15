import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet'
import certina from "../assets/certina-logo.jpg"
import certina1 from "../assets/certina1.jpg"
import certina2 from "../assets/certina2.jpg"
import go from "../assets/go.png";

const AK = () => {
    return (
        <Container>
            <Helmet>
                <title>Купить часы Certina в Алматы - Aksessuary.KZ</title>
                <meta name="description" content="часы Certina"/>
                <meta name="keywords" content="купить часы Certina в Алматы, купить наручные часы Certina в Алматы, купить часы Certina в Казахстане, 
                    наручные часы Certina, Certina, часы Certina в Алматы, часы Certina, Certina, женские часы, часы" />
            </Helmet>
            <Card  style={{borderColor: '#1200ba'}}>
                <img src={ certina } alt="Купить часы Certina в Алматы"  width='35%' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 15}}/>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    История марки началась в 1888 году, когда братья Адольф и Альфред Курт основали в Гренхене небольшую фабрику по производству деталей и часовых механизмов. 
                    Производство готовых часов наладили на несколько лет позже, а торговую марку Grana (сокращенное от латинского Granacus, что значит Гренхен) придумали только 
                    в 1906 году. Название марки стояло на циферблатах первых наручных часов, преимущественно женских, поскольку швейцарские мужчины начала XX века категорически 
                    отказывалисьносить часы на руке.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Надежность часов Certina оценили многие: на счету марки ряд восхождений на высочайшие вершины планеты и глубоководных погружений с водолазами американских ВМС.<br />
                    За последние годы у Certina произошел настоящий прорыв в дизайне. Модельный ряд, состоящий из 10 коллекций, можно разбить на три большие группы: 
                    классические спортивные часы, спортивные дизайнерские часы и часы для экстремальных видов спорта.<br />
                    Наиболее запоминающиеся благодаря наличию защитных перекладин над стеклом часы DS Cascadeur относятся к третьей, "экстремальной" группе. Также, как 
                    и самая дорогая и престижная модель Certina - DS Coronation Automatic. Эти часы выглядят массивными и тяжелыми. Однако корпус и браслет, выполненные из 
                    титана, удивительно легки и очень хорошо смотрятся на руке. Прямоугольная рамка на круглом циферблате делает часы узнаваемыми.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Фирменной чертой Certina является использование дорогих и сложных в производстве корпусов. Почти все они имеют сочетание поверхностей с 
                    тремя видами обработки: полированных, шлифованных и матовых.<br />
                    Неудивительно, что большая часть рекламы и PR спортивной марки так или иначе ориентирована на людей, ведущих активный образ жизни. 
                    Certina является официальный хронометраж на чемпионате мира по мотогонкам, спонсорство соревнований по "водной" Формуле-1, 
                    плаванию и другим видам спорта.
                </p>
                <h4 style={{textAlign: 'center', color: 'red'}}>Товар комиссионный поэтому могут быть дефекты, соответственно товар со скидкой</h4>
                <h4 style={{textAlign: 'center', color: 'red'}}>В случае возникновения вопросов или проблем с поиском нужной продукции свяжитесь с нами!</h4>
                <Row style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px', marginTop: '10px'}}>
                    <Col md={8}>
                        <img src={ certina1 } alt="Купить часы Certina в Алматы" width='100%' style={{marginBottom: 10}}/>
                    </Col>
                    <Col md={4}>
                        <img src={ certina2 } alt="Купить наручные часы Certina в Алматы" width='100%'/>
                    </Col>
                </Row>
                <a href='/shop?brand=22'>
                    <img class='scalecat' src={ go } alt="Купить наручные часы Certinax в Алматы" 
                        style={{width: '12em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} 
                    />
                </a>
            </Card>
        </Container>
    )
}

export default AK