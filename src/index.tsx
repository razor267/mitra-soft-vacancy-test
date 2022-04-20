import React from 'react'
import {createRoot} from 'react-dom/client'
import {AppRouter} from './containers/AppRouter'

createRoot(document.getElementById('root') as HTMLDivElement).render(<AppRouter/>)