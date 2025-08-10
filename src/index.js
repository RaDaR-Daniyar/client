import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { AppContextProvider } from './components/AppContext.js'
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);