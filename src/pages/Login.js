import { AppContext } from '../components/AppContext.js'
import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Card, Form, Button } from 'react-bootstrap'
import { login } from '../http/userAPI.js'
import { observer } from 'mobx-react-lite'

const Login = observer(() => {
    const { user } = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (user.isAdmin) navigate('/admin', {replace: true})
        if (user.isAuth) navigate('/user', {replace: true})
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const email = event.target.email.value.trim()
        const password = event.target.password.value.trim()
        const data = await login(email, password)
        if (data) {
            user.login(data)
            if (user.isAdmin) navigate('/admin')
            if (user.isAuth) navigate('/user')
        }
    }

    return (
        <Container className="d-flex justify-content-center">
            <div class='hide-on-mobile'>
                <Card className="p-2 mt-5 bg-light">
                    <h3 className="m-auto">Авторизация</h3>
                    <Form className="d-flex flex-column" onSubmit={handleSubmit}>
                        <Form.Control
                            name="email"
                            className="mt-3"
                            placeholder="Введите ваш email..."
                        />
                        <Form.Control
                            name="password"
                            className="mt-3"
                            placeholder="Введите ваш пароль..."
                            type='password'
                        />
                        <div className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            <Button type="submit">
                                Войти
                            </Button>
                            <p style={{paddingLeft: 10, paddingTop: 15}}>
                                Нет аккаунта? 
                                <Link to="/signup"> Зарегистрирутесь!</Link> 
                            </p>
                        </div>
                    </Form>
                </Card>
            </div>
            <div class='show-on-mobile'>
                <Card style={{width: '100%'}} className="p-2 mt-5 bg-light">
                    <h3 className="m-auto">Авторизация</h3>
                    <Form className="d-flex flex-column" onSubmit={handleSubmit}>
                        <Form.Control
                            name="email"
                            className="mt-3"
                            placeholder="Введите ваш email..."
                        />
                        <Form.Control
                            name="password"
                            className="mt-3"
                            placeholder="Введите ваш пароль..."
                            type='password'
                        />
                        <div className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            <Button type="submit">
                                Войти
                            </Button>
                            <p style={{marginLeft: '10px', marginTop: '10px'}}>
                                Нет аккаунта? 
                                <Link to="/signup"> Зарегистрирутесь!</Link> 
                            </p>
                        </div>
                    </Form>
                </Card>
            </div>
        </Container>
    )
})

export default Login