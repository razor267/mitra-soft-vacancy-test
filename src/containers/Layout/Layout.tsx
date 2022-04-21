import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './Layout.module.scss'
import Header from '../Header'

const Layout = () => (
    <>
        <div className={styles.appWrapper}>
            <Header/>
            <div className={styles.content}>
                <Outlet/>
            </div>
        </div>
    </>
)

export default Layout