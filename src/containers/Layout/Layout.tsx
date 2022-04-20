import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './Layout.module.scss'

const Layout = () => (
    <>
        <div className={styles.appWrapper}>
            <div className={styles.header}>
                Header
            </div>
            <div className={styles.content}>
                <Outlet/>
            </div>
        </div>
    </>
)

export default Layout