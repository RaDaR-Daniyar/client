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
        <Card className="mb-4" style={{marginTop: 10, borderColor: '#1200ba'}}>
            <div class="hide-on-mobile">
                <Navbar bg="white" className='d-flex justify-content-center'>
                    <Nav className="ml-auto">
                        <NavLink to="/shop" className="link" style={{
                                paddingRight: '50px', 
                                paddingTop: '10px', 
                                paddingBottom: '10px', 
                                fontSize: '17px',
                            }}>
                                <img src = { menu } alt = "Menu" style={{paddingBottom: '5px', marginLeft: '5px', marginRight: '5px'}} />
                                КАТАЛОГ
                        </NavLink>
                        <UIDropdown
                            render={(toggleShow) => <UserCicle className='link' onClick={toggleShow} style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '50px', fontSize: '17px'}}>БРЕНДЫ</UserCicle>}
                        >
                            {(toggleShow) => (
                                <Card style={{marginTop: '14px', width: '160px'}}>
                                    <ListGroup style={{width:'130px', background: "white"}}>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=2" className="link" target='_parent'>ANNE KLEIN</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=4" className="link" target='_parent'>CALVIN KLEIN</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=11" className="link" target='_parent'>SWATCH</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=19" className="link" target='_parent'>CASIO</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=3" className="link" target='_parent'>CITIZEN</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=9" className="link" target='_parent'>ORIENT</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=5" className="link" target='_parent'>DIESEL</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=17" className="link" target='_parent'>PARKER</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=16" className="link" target='_parent'>WATERMAN</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=18" className="link" target='_parent'>LAMY</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=15" className="link" target='_parent'>VICTORINOX</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=22" className="link" target='_parent'>CERTINA</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=20" className="link" target='_parent'>TISSOT</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=21" className="link" target='_parent'>HAMILTON</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=23" className="link" target='_parent'>INVICTA</NavLink>
                                    </ListGroup>
                                </Card>
                            )}
                        </UIDropdown>
                        
                        <NavLink to="/shop?sale=true" className="link" style={{paddingRight: '50px', paddingTop: '10px', paddingBottom: '10px', fontSize: '17px'}}>СКИДКИ</NavLink>
                        <NavLink to="/shop?gender=3" className="link" style={{paddingRight: '50px', paddingTop: '10px', paddingBottom: '10px', fontSize: '17px'}}>МУЖСКИЕ ЧАСЫ</NavLink>
                        <NavLink to="/shop?gender=2" className="link" style={{paddingRight: '50px', paddingTop: '10px', paddingBottom: '10px', fontSize: '17px'}}>ЖЕНСКИЕ ЧАСЫ</NavLink>
                        <NavLink to="/shop?brend=1" className="link" style={{paddingRight: '50px', paddingTop: '10px', paddingBottom: '10px', fontSize: '17px'}}>РУЧКИ</NavLink>
                        <NavLink to="/shop?brand=15" className="link" style={{paddingRight: '50px', paddingTop: '10px', paddingBottom: '10px', fontSize: '17px'}}>VICTORINOX</NavLink>
                        <UIDropdown
                            render={(toggleShow) => <UserCicle className='link' onClick={toggleShow} style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '50px', fontSize: '17px'}}>ИНТЕРЬЕР</UserCicle>}
                        >
                            {(toggleShow) => (
                                <Card style={{marginTop: '14px', width: '190px'}}>
                                    <ListGroup style={{width:'180px', background: "white"}}>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=66" className="link" target='_parent'>НАПОЛЬНЕ ЧАСЫ</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=65" className="link" target='_parent'>НАСТЕННЫЕ ЧАСЫ</NavLink>
                                        <NavLink style={{paddingLeft: '10px', fontSize: '16px'}} to="/shop?brand=68" className="link" target='_parent'>СТАТУЭТКИ</NavLink>
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