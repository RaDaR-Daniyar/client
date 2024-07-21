import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet'
import jufeng from "../assets/jufeng.png"
import jufeng1 from "../assets/jufeng1.jpg"
import jufeng2 from "../assets/jufeng2.jpg"
import go from "../assets/go.png";

const AK = () => {
    return (
        <Container>
            <Helmet>
                <title>Купить Глобус-Бар Jufeng в Алматы - Aksessuary.KZ</title>
                <meta name="description" content="Глобус-бар от Jufeng – это сочетание элегантного дизайна и функциональности. Выполненный в виде глобуса, 
                    он станет прекрасным дополнением к любому интерьеру, особенно если он выполнен в стиле винтаж. Глобус-бар изготовлен из качественных материалов: массива дерева, 
                    МДФ и пластика, что обеспечивает его долговечность и надежность." />
                <meta name="keywords" content="купить Глобус-Бар Jufeng в Алматы, купить Глобус-Бар Jufeng в Казахстане, 
                    Глобус-Бар Jufeng, Jufeng, Глобус-Бар, купить Глобус-Бар в Алматы" />
            </Helmet>
            <Card  style={{borderColor: '#1200ba'}}>
                <img src={ jufeng } alt="Купить часы Глобус-Бар Jufeng в Алматы"  width='35%' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 15}}/>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px', marginTop: '40px'}}>
                    Модели Глобус-баров Jufeng одни из самых строгих и лаконичных, что только добавляет им изысканности и привлекательности. Отсутствие изобилия мелких аксессуаров в 
                    является преимуществом, так как дает больше возможностей для дизайнерского воплощения в существующем или планируемом интерьере. В отделке 
                    использованы подробные копии древних географических карт. Нанесено изображение с глубоким вниманием к мелким деталям. Здесь, как и во многих других сувенирных 
                    и подарочных изделиях отчетливо видно особенное итальянское качество.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Также не стоит забывать о практической ценности глобус бара, так как его можно и нужно использовать по прямому назначению. Компактные шары позволяет 
                    хранить несколько видов любимых напитков хозяина. Что же касается самого процесса, то сам глобус-бар придает особого шарма хозяину, вызывает доверие, и 
                    побуждает к доверительному диалогу.
                </p>
                <p style={{textAlign: 'justify', marginLeft: '20px', marginRight: '20px'}}>
                    Глобус-бар будет удачным подарком деловому человеку. Он уж точно никогда не будет предан забвению, и не будет пылиться в темном углу. Такая вещь 
                    требует быть на самом видном месте, чтобы привлекать внимание и демонстрировать лучшие качества хозяина.
                </p>
                <h4 style={{textAlign: 'center', color: 'red'}}>В случае возникновения вопросов или проблем с поиском нужной продукции свяжитесь с нами!</h4>
                <Row style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px', marginTop: '10px'}}>
                    <Col md={8}>
                        <img src={ jufeng1 } alt="Купить часы Casio в Алматы" width='100%' style={{marginBottom: 10}}/>
                    </Col>
                    <Col md={4}>
                        <img src={ jufeng2 } alt="Купить наручные часы Casio в Алматы" width='100%'/>
                    </Col>
                </Row>
                <a href='/shop?brand=29'>
                    <img class='scalecat' src={ go } alt="Купить наручные часы Casiox в Алматы" 
                        style={{width: '12em', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }} 
                    />
                </a>
            </Card>
        </Container>
    )
}

export default AK