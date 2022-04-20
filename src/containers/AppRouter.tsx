import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Layout from './Layout'
import Suspense from './Suspense'

const Gallery = React.lazy(()=> import('../pages/Gallery'))
const AboutMe = React.lazy(()=> import('../pages/AboutMe'))
const ImageItem = React.lazy(()=> import('../pages/ImageItem'))
const Page404 = React.lazy(()=> import('../pages/Page404'))

export const AppRouter = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Suspense component={<Gallery/>}/>}/>
                <Route path='about_me' element={<Suspense component={<AboutMe/>}/>}/>
                <Route path=':image' element={<Suspense component={<ImageItem/>}/>}/>
                <Route path='*' element={<Suspense component={<Page404/>}/>}/>
            </Route>
        </Routes>
    </Router>
)
