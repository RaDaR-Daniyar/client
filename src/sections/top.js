import Container from 'react-bootstrap/Container'
import '../components/navigation/style.css'
import UIDropdown from "../components/ui_dropdown.js";
import styled from "styled-components";
import { Card, Nav, NavLink, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const UserCicle = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  width: 100%;
  height: 36px;
  font-size: 16px;
  color: #000;
  cursor: pointer;
`;

const Top = () => {
    return (
        <Container className="d-flex justify-content-between mt-3 pl-3 pr-3" style={{borderBottom: '1px solid #1200ba'}}>
            <div class="hide-on-mobile">
                <Nav className="ml-auto">
                    <Link to="/" className="link" style={{paddingRight: '2em', paddingTop: '10px', paddingBottom: '10px', fontSize: '0.8em'}}>ГЛАВНАЯ</Link>
                    <div style={{zIndex: 100}}>
                        <UIDropdown
                            render={(toggleShow) => <UserCicle className='link' onClick={toggleShow} style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '2em', fontSize: '0.8em'}}>БРЕНДЫ</UserCicle>}
                        >
                            {(toggleShow) => (
                                <Card style={{marginTop: '14px', width: '160px'}}>
                                    <ListGroup style={{width:'130px', background: "white"}}>
                                        <Link style={{paddingLeft: '10px', fontSize: '0.8em'}} to="/anne_klein" className="link" target='_parent' >ANNE KLEIN</Link>
                                        <Link style={{paddingLeft: '10px', fontSize: '0.8em'}} to="/calvin_klein" className="link" target='_parent'>CALVIN KLEIN</Link>
                                        <Link style={{paddingLeft: '10px', fontSize: '0.8em'}} to="/swatch" className="link" target='_parent'>SWATCH</Link>
                                        <Link style={{paddingLeft: '10px', fontSize: '0.8em'}} to="/casio" className="link" target='_parent'>CASIO</Link>
                                        <Link style={{paddingLeft: '10px', fontSize: '0.8em'}} to="/citizen" className="link" target='_parent'>CITIZEN</Link>
                                        <Link style={{paddingLeft: '10px', fontSize: '0.8em'}} to="/orient" className="link" target='_parent'>ORIENT</Link>
                                        <Link style={{paddingLeft: '10px', fontSize: '0.8em'}} to="/diesel" className="link" target='_parent'>DIESEL</Link>
                                        <Link style={{paddingLeft: '10px', fontSize: '0.8em'}} to="/parker" className="link" target='_parent'>PARKER</Link>
                                        <Link style={{paddingLeft: '10px', fontSize: '0.8em'}} to="/waterman" className="link" target='_parent'>WATERMAN</Link>
                                        <Link style={{paddingLeft: '10px', fontSize: '0.8em'}} to="/lamy" className="link" target='_parent'>LAMY</Link>
                                        <Link style={{paddingLeft: '10px', fontSize: '0.8em'}} to="/victorinox" className="link" target='_parent'>VICTORINOX</Link>
                                    </ListGroup>
                                </Card>
                            )}
                        </UIDropdown>
                    </div>
                    <div style={{zIndex: 100}}>
                        <UIDropdown
                            render={(toggleShow) => <UserCicle className='link' onClick={toggleShow} style={{paddingTop: '10px', paddingBottom: '10px', fontSize: '0.8em'}}>КОМИССИОНКА</UserCicle>}
                        >
                            {(toggleShow) => (
                                <Card style={{marginTop: '14px', width: '160px'}}>
                                    <ListGroup style={{width:'130px', background: "white"}}>
                                        <Link style={{paddingLeft: '10px', fontSize: '0.8em'}} to="/certina" className="link" target='_parent'>CERTINA</Link>
                                        <Link style={{paddingLeft: '10px', fontSize: '0.8em'}} to="/tissot" className="link" target='_parent'>TISSOT</Link>
                                        <Link style={{paddingLeft: '10px', fontSize: '0.8em'}} to="/hamilton" className="link" target='_parent'>HAMILTON</Link>
                                        <Link style={{paddingLeft: '10px', fontSize: '0.8em'}} to="/invicta" className="link" target='_parent'>INVICTA</Link>
                                    </ListGroup>
                                </Card>
                            )}
                        </UIDropdown>
                    </div>
                    <div style={{zIndex: 100}}>
                        <UIDropdown
                            render={(toggleShow) => <UserCicle className='link' onClick={toggleShow} style={{paddingTop: '10px', paddingBottom: '10px', fontSize: '0.8em', paddingLeft: '2em'}}>ИНТЕРЬЕР</UserCicle>}
                        >
                            {(toggleShow) => (
                                <Card style={{marginTop: '14px', width: '190px'}}>
                                    <ListGroup style={{width:'130px', background: "white"}}>
                                        <Link style={{paddingLeft: '2px', fontSize: '0.8em'}} to="/figura" className="link" target='_parent'>СТАТУЭТКИ</Link>
                                        <Link style={{paddingLeft: '2px', fontSize: '0.8em'}} to="/pol" className="link" target='_parent'>НАПОЛЬНЫЕ ЧАСЫ</Link>
                                        <Link style={{paddingLeft: '2px', fontSize: '0.8em'}} to="/stena" className="link" target='_parent'>НАСТЕННЫЕ ЧАСЫ</Link>
                                        <Link style={{paddingLeft: '2px', fontSize: '0.8em'}} to="/globus" className="link" target='_parent'>ГЛОБУС-БАРЫ</Link>
                                    </ListGroup>
                                </Card>
                            )}
                        </UIDropdown>
                    </div>
                    <Link to="/about" className="link" style={{paddingLeft: '2em', paddingRight: '2em', paddingTop: '10px', paddingBottom: '10px', fontSize: '0.8em'}}>О МАГАЗИНЕ</Link>
                    <Link to="/delivery" className="link" style={{paddingRight: '2em', paddingTop: '10px', paddingBottom: '10px', fontSize: '0.8em'}}>ДОСТАВКА И ОПЛАТА</Link>
                    <Link to="/service" className="link" style={{paddingRight: '2em', paddingTop: '10px', paddingBottom: '10px', fontSize: '0.8em'}}>СЕРВИС-ЦЕНТР</Link>
                </Nav>
            </div>
            <div className='hide-on-mobile' style={{marginTop: '5px'}}>
                <a href="tel:+77003069000" style={{fontSize: '1em', fontWeight: 'bold', color: "#1200ba", textDecoration: "none"}}>+7 (700) 306-90-00 |</a>
                <a style={{color: "#1200ba", fontSize: '1em', fontWeight: 'bold'}}> ПН-ВС 09:00-20:00</a>
            </div>
        </Container>
    )
}

export default Top