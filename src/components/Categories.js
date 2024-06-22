import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import clock from "../assets/clockcategories1.jpg";
import clock1 from "../assets/clockcategories2.jpg";
import pen1 from "../assets/pencategories1.jpg";
import pen2 from "../assets/pencategories2.jpg";
import victorinox1 from "../assets/victorinoxcategories1.jpg";
import victorinox2 from "../assets/victorinoxcategories2.jpg";

const Categories = () => {
    return (
        <Container className='mt-4'>
            <Card style={{padding: '2%', borderColor: '#1200ba'}}>
                <div class='hide-on-mobile'>
                <h2 style={{textAlign: 'center', fontWeight: 'bold', color: '#1200ba', fontFamily: 'Book Antiqua'}}>Категории</h2>
                    <Row className='mt-3'>
                        <Col md={4}>
                            <a href='/shop?mehanizm=3'><img class='scalecategories' src={ clock } alt="Купить наручные механические часы в Алматы" style={{width: '48%', marginBottom: 10}} /></a>
                            <a href='/shop?mehanizm=1'><img class='scalecategories' src={ clock1 } alt="Купить наручные кварцевые часы в Алматы" style={{width: '48%', marginBottom: 10, marginLeft: '4%'}} /></a>
                        </Col>
                        <Col md={4}>
                            <a href='/shop?brend=1'><img class='scalecategories' src={ pen1 } alt="Купить перьевые ручки в Алматы" style={{width: '48%', marginBottom: 10}} /></a>
                            <a href='/shop?brend=2'><img class='scalecategories' src={ pen2 } alt="Купить шариковые ручки в Алматы" style={{width: '48%', marginBottom: 10, marginLeft: '4%'}} /></a>
                        </Col>
                        <Col md={4}>
                            <a href='/shop?brand=15'><img class='scalecategories' src={ victorinox1 } alt="Купить армейские ножи Victorinox в Алматы" style={{width: '48%'}} /></a>
                            <a href='/shop?brend=29'><img class='scalecategories' src={ victorinox2 } alt="Купить кухонные ножи Victorinox в Алматы" style={{width: '48%', marginLeft: '4%'}} /></a>
                        </Col>
                    </Row>
                </div>
                <div class='show-on-mobile'>
                <h2 style={{textAlign: 'center', fontWeight: 'bold', color: '#1200ba', fontFamily: 'Book Antiqua'}}>Категории</h2>
                    <Row className='mt-3'>
                        <Col md={6}>
                            <a href='/shop?mehanizm=3'><img class='scalecategories' src={ clock } alt="Купить наручные механические часы в Алматы" style={{width: '32%', marginBottom: 10}} /></a>
                            <a href='/shop?mehanizm=1'><img class='scalecategories' src={ clock1 } alt="Купить наручные кварцевые часы в Алматы" style={{width: '32%', marginBottom: 10, marginLeft: '2%'}} /></a>
                            <a href='/shop?brend=1'><img class='scalecategories' src={ pen1 } alt="Купить перьевые ручки в Алматы" style={{width: '32%', marginBottom: 10, marginLeft: '2%'}} /></a>
                        </Col>
                        <Col md={6}>
                            <a href='/shop?brend=2'><img class='scalecategories' src={ pen2 } alt="Купить шариковые ручки в Алматы" style={{width: '32%', marginBottom: 10}} /></a>
                            <a href='/shop?brand=15'><img class='scalecategories' src={ victorinox1 } alt="Купить армейские ножи Victorinox в Алматы" style={{width: '32%', marginBottom: 10, marginLeft: '2%'}} /></a>
                            <a href='/shop?brend=29'><img class='scalecategories' src={ victorinox2 } alt="Купить кухонные ножи Victorinox в Алматы" style={{width: '32%', marginBottom: 10, marginLeft: '2%'}} /></a>
                        </Col>
                    </Row>
                </div>
            </Card>
        </Container>
    )
}

export default Categories