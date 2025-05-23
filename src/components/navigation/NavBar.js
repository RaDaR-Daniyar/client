import { Navbar, Nav, Card, ListGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import './style.css'
import styled from "styled-components";
import UIDropdown from "../ui_dropdown.js";
import menu from '../../assets/menu.png'

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

const NavBar = observer(() => {
    return (
        <Card className="mb-1" style={{borderColor: '#1200ba'}}>
            <div class="hide-on-mobile" style={{fontFamily: 'Book Antiqua'}}>
                <Navbar bg="white" className='d-flex justify-content-center' style={{height: '30px', marginTop: '5px'}}>
                    <Nav>
                        <NavLink to="/shop.html" className="link" style={{
                                paddingRight: '2.5em', 
                                paddingTop: '10px', 
                                paddingBottom: '10px', 
                                fontSize: '1em',
                            }}>
                                <img src = { menu } alt = "Menu" style={{paddingBottom: '5px', marginLeft: '5px', marginRight: '5px'}} />
                                КАТАЛОГ
                        </NavLink>
                        <UIDropdown
                            render={(toggleShow) => <UserCicle className='link' onClick={toggleShow} style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '2.5em', fontSize: '1em'}}>БРЕНДЫ</UserCicle>}
                        >
                            {(toggleShow) => (
                                <Card style={{marginTop: '14px', width: '160px'}}>
                                    <ListGroup style={{width:'130px', background: "white"}}>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop.html?brand=2" className="link">ANNE KLEIN</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop.html?brand=4" className="link">CALVIN KLEIN</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop.html?brand=11" className="link">SWATCH</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop.html?brand=19" className="link">CASIO</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop.html?brand=3" className="link">CITIZEN</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop.html?brand=9" className="link">ORIENT</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop.html?brand=5" className="link">DIESEL</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop.html?brand=17" className="link">PARKER</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop.html?brand=16" className="link">WATERMAN</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop.html?brand=18" className="link">LAMY</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop.html?brand=15" className="link">VICTORINOX</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop.html?brand=22" className="link">CERTINA</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop.html?brand=20" className="link">TISSOT</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop.html?brand=21" className="link">HAMILTON</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop.html?brand=23" className="link">INVICTA</NavLink>
                                    </ListGroup>
                                </Card>
                            )}
                        </UIDropdown>
                        
                        <NavLink to="/shop.html?sale=true" className="link" style={{paddingRight: '2.5em', paddingTop: '10px', paddingBottom: '10px', fontSize: '1em'}}>СКИДКИ</NavLink>
                        <NavLink to="/shop.html?gender=3" className="link" style={{paddingRight: '2.5em', paddingTop: '10px', paddingBottom: '10px', fontSize: '1em'}}>МУЖСКИЕ ЧАСЫ</NavLink>
                        <NavLink to="/shop.html?gender=2" className="link" style={{paddingRight: '2.5em', paddingTop: '10px', paddingBottom: '10px', fontSize: '1em'}}>ЖЕНСКИЕ ЧАСЫ</NavLink>
                        <NavLink to="/shop.html?brend=1" className="link" style={{paddingRight: '2.5em', paddingTop: '10px', paddingBottom: '10px', fontSize: '1em'}}>РУЧКИ</NavLink>
                        <NavLink to="/shop.html?brand=15" className="link" style={{paddingRight: '2.5em', paddingTop: '10px', paddingBottom: '10px', fontSize: '1em'}}>VICTORINOX</NavLink>
                        <UIDropdown
                            render={(toggleShow) => <UserCicle className='link' onClick={toggleShow} style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '2em', fontSize: '1em'}}>ИНТЕРЬЕР</UserCicle>}
                        >
                            {(toggleShow) => (
                                <Card style={{marginTop: '14px', width: '190px'}}>
                                    <ListGroup style={{width:'180px', background: "white"}}>
                                        <NavLink style={{paddingLeft: '1px', fontSize: '1em'}} to="/shop.html?gender=9" className="link">НАПОЛЬНЕ ЧАСЫ</NavLink>
                                        <NavLink style={{paddingLeft: '1px', fontSize: '1em'}} to="/shop.html?gender=10" className="link">НАСТЕННЫЕ ЧАСЫ</NavLink>
                                        <NavLink style={{paddingLeft: '1px', fontSize: '1em'}} to="/shop.html?gender=11" className="link">НАСТОЛЬНЫЕ ЧАСЫ</NavLink>
                                        <NavLink style={{paddingLeft: '1px', fontSize: '1em'}} to="/shop.html?brend=68" className="link">СТАТУЭТКИ</NavLink>
                                        <NavLink style={{paddingLeft: '1px', fontSize: '1em'}} to="/shop.html?brend=70" className="link">ГЛОБУСЫ-БАРЫ</NavLink>
                                    </ListGroup>
                                </Card>
                            )}
                        </UIDropdown>
                    </Nav>
                </Navbar>
            </div>
        </Card>
    )
})

export default NavBar