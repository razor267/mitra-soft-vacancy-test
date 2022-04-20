import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <Router basename={process.env.PUBLIC_URL}>
            <App/>
    </Router>
)