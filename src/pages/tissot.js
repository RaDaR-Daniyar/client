import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet'
import tissot from "../assets/tissot-logo.jpg"
import tissot1 from "../assets/tissot1.jpg"
import tissot2 from "../assets/tissot2.jpg"
import go from "../assets/go.png";

const AK = () => {
    return (
        <Container>
            <Helmet>
                <title>Купить часы Tissot в Алматы - Aksessuary.KZ</title>
                <meta name="description" content="часы Tissot"/>
                <meta name="keywords" content="купить часы Tissot в Алматы, купить наручные часы Tissot в Алматы, купить часы Tissot в Казахстане, 
                    наручные часы Tissot, Tissot, часы Tissot в Алматы, часы Tissot, Tissot, женские часы, часы" />
            </Helmet>
            <Card  style={{borderColor: '#1200ba'}}>
                <img src={ tissot } alt="Купить часы Tissot в Алматы"  width='35%' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 15}}/>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Марка Tissot была основана в 1853 году Шарлем-Фелисьеном Тиссот и его сыном Шарлем-Эмилем. На протяжении многих лет часы Tissot представляют 
                    интерес для самого широкого круга любителей качественных часов. Техническое оснащение моделей, применение новых материалов, 
                    оригинальная подача часовых функций - инженеры и часовщики марки всегда знали и знают, как и чем удивить и привлечь покупателей.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Производящая относительно недорогие часы, Tissot уделяет огромное внимание дизайну, качеству обработки каждой детали и сборки часов. 
                    Именно это стало главным для фирмы. <br />
                    Одним из фирменных элементов в дизайне часов для Tissot стало использование буквы "Т". Это придало марке индивидуальность. 
                    Почти все модели Tissot последних лет имеют легко узнаваемый и запоминающийся дизайн, по которому вы безошибочно определите марку. Буква "Т", 
                    появляющаяся в различных элементах часов - это как подпись мастера на живописном полотне. Все коллекции, выпускаемые Tissot в последнее время, 
                    получают название с буквой "Т". Этим Tissot также хочет подчеркнуть внимание к деталям.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Недавно провозглашенный Tissot лозунг: «Новаторство - наша традиция» - прекрасно отражает положение вещей: более 150 лет компания Tissot 
                    придерживается курса на нововведения, необычные идеи и дух изобретательства.<br />
                    На протяжении многих лет неотъемлемой частью жизни компании является спорт: на международном уровне Tissot выступает официальным спонсором и 
                    партнером различных состязаний, таких как велосипедные гонки, мотогонки, хоккей и фехтование.Участие в них, по мнению руководства, приносит 
                    марке не только растущую популярность, но и заряд положительных эмоций, самым положительным образом способствующих творческому процессу.
                </p>
                <h4 style={{textAlign: 'center', color: 'red'}}>Товар комиссионный поэтому могут быть дефекты, соответственно товар со скидкой</h4>
                <h4 style={{textAlign: 'center', color: 'red'}}>В случае возникновения вопросов или проблем с поиском нужной продукции свяжитесь с нами!</h4>
                <Row style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px', marginTop: '10px'}}>
                    <Col md={8}>
                        <img src={ tissot1 } alt="Купить часы Tissot в Алматы" width='100%' style={{marginBottom: 10}}/>
                    </Col>
                    <Col md={4}>
                        <img src={ tissot2 } alt="Купить наручные часы Tissot в Алматы" width='100%'/>
                    </Col>
                </Row>
                <a href='/shop?brand=20'>
                    <img class='scalecat' src={ go } alt="Купить наручные часы Tissotx в Алматы" 
                        style={{width: '12em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} 
                    />
                </a>
            </Card>
        </Container>
    )
}

export default AK