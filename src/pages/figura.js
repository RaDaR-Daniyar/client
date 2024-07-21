import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet'
import guillermoforchino from "../assets/guillermoforchino.png"
import guillermoforchino1 from "../assets/guillermoforchino1.jpg"
import guillermoforchino2 from "../assets/guillermoforchino2.jpg"
import go from "../assets/go.png";

const AK = () => {
    return (
        <Container>
            <Helmet>
                <title>Купить статуэтки Guillermo Forchino в Алматы - Aksessuary.KZ</title>
                <meta name="description" content="Скульптуры Guillermo Forchino — это кладезь юмористических комиксов в виде оживших фигурок. Изящные сувениры представляют собой 
                    комичные истории из жизненных реалий. Обширная коллекция Форчино включает в себя колоритных персонажей, среди которых можно найти представителей разных профессий. 
                    В огромном ассортиментном ряду особо примечательно выглядят адвокат, пилот, доктор, повар, фармацевт, стоматолог и лентяй, вальяжно расположившийся в кресле. Все статуэтки 
                    Forchino наделены характером и передают разные образы. Такие изделия — отличные подарки коллегам на профессиональный праздник."/>
                <meta name="keywords" content="купить статуэтки Guillermo Forchino в Алматы, купить статуэтки Guillermo Forchino в Казахстане, 
                    статуэтки Guillermo Forchino, Guillermo Forchino, статуэтки, купить статуэтки в Алматы" />
            </Helmet>
            <Card  style={{borderColor: '#1200ba'}}>
                <img src={ guillermoforchino } alt="Купить статуэтки Guillermo Forchino в Алматы"  width='50%' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 15}}/>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px', marginTop: 20}}>
                    Скульптуры Guillermo Forchino — это кладезь юмористических комиксов в виде оживших фигурок. Изящные сувениры представляют собой комичные истории 
                    из жизненных реалий. Обширная коллекция Форчино включает в себя колоритных персонажей, среди которых можно найти представителей разных профессий. В огромном 
                    ассортиментном ряду особо примечательно выглядят адвокат, пилот, доктор, повар, фармацевт, стоматолог и лентяй, вальяжно расположившийся в кресле. Все статуэтки 
                    Forchino наделены характером и передают разные образы. Такие изделия — отличные подарки коллегам на профессиональный праздник.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Необычные фигурки Форчино в виде легковых авто, внедорожников, мотоциклов и самолетов станут идеальным подарком для мужчин. В авторском исполнении машины 
                    изображены со спущенными колесами, а самолеты и лодки — со сломанными или ржавыми деталями. Таким образом автор делает вызов распространенным стереотипам.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Особый интерес представляют статуэтки Форчино «скамейки мира» и фигурки с изображением самого Гильермо. Такой презент понравится коллекционерам, а также 
                    ценителям творчества мастера.
                </p>
                <h4 style={{textAlign: 'center', color: 'red'}}>В случае возникновения вопросов или проблем с поиском нужной продукции свяжитесь с нами!</h4>
                <Row style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px', marginTop: '10px'}}>
                    <Col md={8}>
                        <img src={ guillermoforchino1 } alt="Купить статуэтки Guillermo Forchino в Алматы" width='100%' style={{marginBottom: 10}}/>
                    </Col>
                    <Col md={4}>
                        <img src={ guillermoforchino2 } alt="Купить статуэтки Guillermo Forchino в Алматы" width='100%'/>
                    </Col>
                </Row>
                <a href='/shop?brand=30'>
                    <img class='scalecat' src={ go } alt="Купить наручные часы Casiox в Алматы" 
                        style={{width: '12em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} 
                    />
                </a>
            </Card>
        </Container>
    )
}

export default AK