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
            <div class="hide-on-mobile">
                <Navbar bg="white" className='d-flex justify-content-center' style={{height: '30px', marginTop: '5px'}}>
                    <Nav>
                        <NavLink to="/shop" className="link" style={{
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
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop?brand=2" className="link" target='_parent'>ANNE KLEIN</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop?brand=4" className="link" target='_parent'>CALVIN KLEIN</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop?brand=11" className="link" target='_parent'>SWATCH</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop?brand=19" className="link" target='_parent'>CASIO</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop?brand=3" className="link" target='_parent'>CITIZEN</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop?brand=9" className="link" target='_parent'>ORIENT</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop?brand=5" className="link" target='_parent'>DIESEL</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop?brand=17" className="link" target='_parent'>PARKER</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop?brand=16" className="link" target='_parent'>WATERMAN</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop?brand=18" className="link" target='_parent'>LAMY</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop?brand=15" className="link" target='_parent'>VICTORINOX</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop?brand=22" className="link" target='_parent'>CERTINA</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop?brand=20" className="link" target='_parent'>TISSOT</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop?brand=21" className="link" target='_parent'>HAMILTON</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '1em'}} to="/shop?brand=23" className="link" target='_parent'>INVICTA</NavLink>
                                    </ListGroup>
                                </Card>
                            )}
                        </UIDropdown>
                        
                        <NavLink to="/shop?sale=true" className="link" style={{paddingRight: '2.5em', paddingTop: '10px', paddingBottom: '10px', fontSize: '1em'}}>СКИДКИ</NavLink>
                        <NavLink to="/shop?gender=3" className="link" style={{paddingRight: '2.5em', paddingTop: '10px', paddingBottom: '10px', fontSize: '1em'}}>МУЖСКИЕ ЧАСЫ</NavLink>
                        <NavLink to="/shop?gender=2" className="link" style={{paddingRight: '2.5em', paddingTop: '10px', paddingBottom: '10px', fontSize: '1em'}}>ЖЕНСКИЕ ЧАСЫ</NavLink>
                        <NavLink to="/shop?brend=1" className="link" style={{paddingRight: '2.5em', paddingTop: '10px', paddingBottom: '10px', fontSize: '1em'}}>РУЧКИ</NavLink>
                        <NavLink to="/shop?brand=15" className="link" style={{paddingRight: '2.5em', paddingTop: '10px', paddingBottom: '10px', fontSize: '1em'}}>VICTORINOX</NavLink>
                        <UIDropdown
                            render={(toggleShow) => <UserCicle className='link' onClick={toggleShow} style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '2em', fontSize: '1em'}}>ИНТЕРЬЕР</UserCicle>}
                        >
                            {(toggleShow) => (
                                <Card style={{marginTop: '14px', width: '190px'}}>
                                    <ListGroup style={{width:'180px', background: "white"}}>
                                        <NavLink style={{paddingLeft: '1px', fontSize: '1em'}} to="/shop?gender=9" className="link" target='_parent'>НАПОЛЬНЕ ЧАСЫ</NavLink>
                                        <NavLink style={{paddingLeft: '1px', fontSize: '1em'}} to="/shop?gender=10" className="link" target='_parent'>НАСТЕННЫЕ ЧАСЫ</NavLink>
                                        <NavLink style={{paddingLeft: '1px', fontSize: '1em'}} to="/shop?gender=11" className="link" target='_parent'>НАСТОЛЬНЫЕ ЧАСЫ</NavLink>
                                        <NavLink style={{paddingLeft: '1px', fontSize: '1em'}} to="/shop?brend=68" className="link" target='_parent'>СТАТУЭТКИ</NavLink>
                                        <NavLink style={{paddingLeft: '1px', fontSize: '1em'}} to="/shop?brend=70" className="link" target='_parent'>ГЛОБУСЫ-БАРЫ</NavLink>
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