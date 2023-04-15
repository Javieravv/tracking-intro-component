import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main-styles.scss'
import { MainComponent } from './components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <MainComponent />
    </React.StrictMode>,
)
