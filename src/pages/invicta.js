import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet'
import invicta from "../assets/invicta-logo.png"
import invicta1 from "../assets/invicta1.jpg"
import invicta2 from "../assets/invicta2.jpg"
import go from "../assets/go.png";

const AK = () => {
    return (
        <Container>
            <Helmet>
                <title>Купить часы Invicta в Алматы - Aksessuary.KZ</title>
                <meta name="description" content="часы Invicta"/>
                <meta name="keywords" content="купить часы Invicta в Алматы, купить наручные часы Invicta в Алматы, купить часы Invicta в Казахстане, 
                    наручные часы Invicta, Invicta, часы Invicta в Алматы, часы Invicta, Invicta, женские часы, часы" />
            </Helmet>
            <Card  style={{borderColor: '#1200ba'}}>
                <img src={ invicta } alt="Купить часы Invicta в Алматы"  width='35%' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 15}}/>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Наручные часы, выпускаемые под брендом Invicta - это образец тонкого вкуса, изысканного дизайна и, конечно же, высочайшего качества, которым славятся 
                    модели многих швейцарских производителей. Однако компания Invicta среди них стоит особняком, предлагая покупателям уникальную в своем роде продукцию – 
                    классические наручные часы, мужские и женские, отменного качества и по доступным ценам. Действительно, в отличие от многих других швейцарских часовых компаний, 
                    которые стремились сделать свою продукцию элитной, продавая ее по заоблачным ценам, менеджеры Invicta решили пойти по другому пути. Они предложили занять 
                    нишу качественных наручных часов средней ценовой категории. Именно такими сегодня и являются модели бренда Invicta - эксклюзивными, 
                    качественными и доступными по цене.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    На сегодняшний день компания разрабатывает около десятка вполне самостоятельных линий наручных часов, которые объединены под единым брендом Invicta. 
                    Для поддержки продукции было принято решение создать узнаваемый образ. Им стал Invicta Watch Puppy - забавный черный щенок с часами на ошейнике и крыльями за спиной. 
                    На официальном сайте компании Invicta можно найти не только каталог с фирменными наручными часами, но и разнообразные сувениры с этим милым щенком.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Как и у многих других швейцарских часовых компаний, история бренда Invicta уходит своими корнями в далекое прошлое, а точнее к 1837 году, 
                    который и считается годом основания фирмы. Invicta появилась благодаря Рафаэлю Пикарду (Raphael Picard), открывшему небольшое предприятие на базе 
                    маленькой часовой лавки, которой на тот момент владела его семья. Основана компания была в швейцарском городке La Chaux-de-fonds.!<br />
                    Часовой бизнес шел хорошо, и бренд Invicta спустя всего несколько лет стал узнаваемым по всей Европе. Возможно, этому способствовало не только 
                    высочайшее качество и оригинальный дизайн первых моделей наручных часов, но и выбранное имя компании, ведь в переводе с латинского языка Invicta означает «непобедимый».
                </p>
                <h4 style={{textAlign: 'center', color: 'red'}}>Товар комиссионный поэтому могут быть дефекты, соответственно товар со скидкой</h4>
                <h4 style={{textAlign: 'center', color: 'red'}}>В случае возникновения вопросов или проблем с поиском нужной продукции свяжитесь с нами!</h4>
                <Row style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px', marginTop: '10px'}}>
                    <Col md={8}>
                        <img src={ invicta1 } alt="Купить часы Invicta в Алматы" width='100%' style={{marginBottom: 10}}/>
                    </Col>
                    <Col md={4}>
                        <img src={ invicta2 } alt="Купить наручные часы Invicta в Алматы" width='100%'/>
                    </Col>
                </Row>
                <a href='/shop?brand=23'>
                    <img class='scalecat' src={ go } alt="Купить наручные часы Invictax в Алматы" 
                        style={{width: '12em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} 
                    />
                </a>
            </Card>
        </Container>
    )
}

export default AK