import MobileMenu from './mobileMenu.js'
import Container from 'react-bootstrap/Container'
import logo from '../assets/logo.png'
import login from '../assets/login.png'
import cart from '../assets/basket.png'
import panel from '../assets/panel.png'
import { Link, NavLink } from 'react-router-dom'
import { AppContext } from '../components/AppContext'
import { useContext } from 'react'
import NavBar from '../components/navigation/NavBar'
import Top from './top.js'
import { Col, Nav, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'


const Header = observer(() => {
    const { user, basket } = useContext(AppContext);

    return (
        <Container style={{ position: 'relative'}}>
            <div className='hide-on-mobile'>
                <Row style={{paddingTop: '10px'}}>
                    <Nav>
                        <Col style={{textAlign: 'left'}}>
                            <NavLink to="/" className="navbar-brand" target='_parent'>
                                <a style={{color: 'white'}}>__<img  src = { logo } alt = "Купить аксессуары в Алматы" width={'200rem'} /></a>
                            </NavLink>
                        </Col>
                        {user.isAuth ? (
                            <Link to="/user" className="nav-link" style={{color: 'black',  padding: '0.5rem 0.2rem' }}><img  src = { login } alt = "Войти" style={{marginTop: -5}} /></Link>
                        ) : (
                            <>
                                <Link to="/login" className="nav-link" style={{color: 'black',  padding: '0.5rem 0.2rem'}}><img  src = { login } alt = "Войти" style={{marginTop: -5}} /></Link>
                            </>
                        )} {user.isAdmin && (
                            <Link to="/admin" className="nav-link" style={{color: 'black',  padding: '0.5rem 0.2rem'}}><img  src = { panel } alt = "Панель управления" style={{marginTop: -5}} /></Link>
                        )}
                        <Link to="/basket" className="nav-link basket" style={{color: 'black',  padding: '0.5rem 0.2rem', position: 'relative'}}>
                            <img  src = { cart } alt = "Корзина" style={{marginTop: -5}} />
                            {!!basket.count && <span>{basket.count}</span>}
                        </Link>
                    </Nav>
                </Row>
                <NavBar />
            </div>
            <div className='show-on-mobile'>
                <Row className="mt-4" style={{paddingTop: '0px'}}>
                    <Nav>
                        <Col>
                            <NavLink to="/" target='_parent'>
                                <p style={{color: 'white'}}>__<img  src = { logo } alt = "Купить аксессуары в Алматы" width={'200rem'}/></p>
                            </NavLink>
                        </Col>
                        <MobileMenu />
                    </Nav>
                </Row>
                <NavBar />
            </div>
        </Container>
        
    )
})

export default Header