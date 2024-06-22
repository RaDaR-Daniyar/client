import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import telegram from '../assets/telegram.png'
import { useState } from 'react'

const Footer = () => {
    // open accordions
    var { 0: activeAc, 1: setActiveAc } = useState([])

    var setAcordion = (ind) => {
        setActiveAc((actives => {
            if (actives.includes(ind)) {
                setTimeout(() => {
                    setActiveAc(actives.filter((i) => (i != ind) && (i != ind*100)))
                }, 300);
                return [...actives, ind*100]
            } else {
                return [...actives, ind]
            }
        }))
    }

    console.log(activeAc)
    return (
        <Container className='mt-4' style={{marginBottom: 30}}>
            <Card style={{borderColor: '#1200ba'}}>
                <Row style={{flexWrap: 'wrap'}}>
                    <Col md={4} style={{ marginLeft: 10, marginTop: 20}}>
                        <img  src = { logo } alt = "Купить аксессуары в Алматы" style={{width: 170}}/><br /><br />
                        <p style={{textAlign: "justify", fontSize: 16, width: '95%'}}>Брендовые аксессуары — это стильные и полезные мелочи, которые дополняют Ваш образ. У нас Вы найдете подходящие аксессуары для любого случая. Если пользоваться этими штрихами умело и со вкусом, Вы легко поднимете свой стиль на новую высоту.</p>
                    </Col>
                    <Col md={2} style={{marginTop: 20, marginLeft: 10, minWidth: '160px'}}>
                        <h4 style={{ color: "#1200ba", marginBottom: 10 }} onClick={() => setAcordion(1)}>Навигация <svg style={Object.assign({ width: '15px', transition: 'all 0.3s', fill: 'rgb(18, 0, 186)' }, window.innerWidth > 767 ? { display: 'none' } : {}, activeAc.includes(1) ? {transform: 'rotate(180deg)'} : {})} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> </h4>
                        <ul style={Object.assign({ listStyle: 'none', paddingLeft: 0, marginBottom: 0 }, (activeAc.includes(1) || window.innerWidth > 767) ? { display: 'block' } : {})}
                            className={'accordion-list' + ((activeAc.includes(100) && window.innerWidth <= 767) ? ' acoordion-list-off' : '')}
                        >
                            <li>
                                <a href='/' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Главная</a>
                            </li>
                            <li>
                                <a href='/shop' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Каталог</a>
                            </li>
                            <li>
                                <a href='/shop/?gender=3' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Мужские часы</a>
                            </li>
                            <li>
                                <a href='/shop/?gender=2' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Женские часы</a>
                            </li>
                            <li>
                                <a href='/shop?brend=1' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Ручки</a>
                            </li>
                            <li>
                                <a href='/shop?brand=15' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Ножи</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2} style={{marginTop: 20, marginLeft: 10, minWidth: '175px'}} onClick={() => setAcordion(2)}>
                        <h4 style={{ color: "#1200ba", marginBottom: 10 }}>Информация<svg style={Object.assign({ width: '15px', transition: 'all 0.3s', fill: 'rgb(18, 0, 186)' }, window.innerWidth > 767 ? { display: 'none' } : {}, activeAc.includes(2) ? {transform: 'rotate(180deg)'} : {})} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></h4>
                        <ul style={Object.assign({ listStyle: 'none', paddingLeft: 0, marginBottom: 0 }, (activeAc.includes(2) || window.innerWidth > 767) ? { display: 'block' } : {})}
                            className={'accordion-list' + ((activeAc.includes(200) && window.innerWidth <= 767) ? ' acoordion-list-off' : '')}
                        >
                            <li>
                                <a href='/about' style={{textDecoration: "none", fontSize: 14, color: "black"}}>О магазине</a>
                            </li>
                            <li>
                                <a href='/delivery' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Доставка и оплата</a>
                            </li>
                            <li>
                                <a href='/service' style={{textDecoration: "none", fontSize: 14, color: "black"}}>Сервис-центр</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2} style={{marginLeft: 10, minWidth: '200px'}}>
                        <h4 style={{ color: "#1200ba", marginBottom: 10, marginTop: 20 }} onClick={() => setAcordion(3)}>Контакты<svg style={Object.assign({ width: '15px', transition: 'all 0.3s', fill: 'rgb(18, 0, 186)' }, window.innerWidth > 767 ? { display: 'none' } : {}, activeAc.includes(3) ? {transform: 'rotate(180deg)'} : {})} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></h4>
                        <ul style={Object.assign({ listStyle: 'none', paddingLeft: 0, marginBottom: 0 }, (activeAc.includes(3) || window.innerWidth > 767) ? { display: 'block' } : {})}
                            className={'accordion-list' + ((activeAc.includes(300) && window.innerWidth <= 767) ? ' acoordion-list-off' : '')}
                        >
                            <li>
                                <a href='tel:+77003069000' style={{ textDecoration: "none", fontSize: 14, color: "black" }}>Телефон: +77003069000</a>
                            </li>
                            <li>
                                <a href="mailto:radar-daniyar@mail.ru" style={{textDecoration: "none", fontSize: 14, color: "black"}}>E-mail: radar-daniyar@mail.ru</a>
                            </li>
                            <li>
                                <div className='mt-3'>
                                    <a href='https://www.instagram.com/radar.daniyar/' target='_blank'><img  src = { instagram } alt = "Купить аксессуары в Алматы" style={{marginRight: 10}} /></a>
                                    <a href='https://web.facebook.com/profile.php?id=100093576204176' target='_blank'><img  src = { facebook } alt = "Купить аксессуары в Алматы" style={{marginRight: 10}} /></a>
                                    <a href='//wa.me/77003069000' target='_blank' rel="noopener"><img  src = { whatsapp } alt = "Купить аксессуары в Алматы" style={{marginRight: 10}} /></a>
                                    <a href='//t.me/RaDaR1204' target='_blank' rel="noopener"><img  src = { telegram } alt = "Купить аксессуары в Алматы" style={{marginRight: 10}} /></a>
                                </div>
                            </li>
                            <li>
                                <div className='mt-1'>
                                    <a href='/' style={{textDecoration: "none", fontSize: 14, color: "black", fontWeight: "bold", whiteSpace: 'nowrap'}}>© 2023. Все права защищены</a>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default Footer