import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppContext } from './components/AppContext.js'
import { check as checkAuth } from './http/userAPI.js'
import { useState, useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Loader from './components/Loader.js'
import Header from './sections/header.js'
import Footer from './sections/footer.js'
import Aside from './sections/aside.js'

import { fetchBasket } from './http/basketAPI.js'

import axios from 'axios'

const App = observer(() => {
    const { user, basket } = useContext(AppContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Promise.all([checkAuth(), fetchBasket()])
            .then(
                axios.spread((userData, basketData) => {
                    if (userData) {
                        user.login(userData)
                    }
                    basket.products = basketData.products
                })
            )
            .finally(
                () => setLoading(false)
            )
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <BrowserRouter>
            <Header />
            <Aside />
            <AppRouter />
            <Footer />
        </BrowserRouter>
    )
})

export default App