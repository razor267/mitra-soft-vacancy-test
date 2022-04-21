import React, {FC, useState} from 'react'
import {Container, Nav, Navbar, Offcanvas, Image, CloseButton, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import styles from './Header.module.scss'

const Header: FC = () => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <Navbar bg="dark" variant="dark" expand={false}>
            <Container fluid className="justify-content-start">
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow}/>
                <Navbar.Brand className="ms-2"><Link to="/" className={styles.link}>Image gallery</Link></Navbar.Brand>
                <Navbar.Offcanvas
                    show={show}
                    onHide={handleClose}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                    className="bg-dark text-light w-25"
                >
                    <Offcanvas.Header>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Меню</Offcanvas.Title>
                        <CloseButton variant="white" onClick={handleClose}/>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Container className="d-grid gap-1">
                            <Row>
                                <Image
                                    src="https://icon-library.com/images/50x50-icon/50x50-icon-0.jpg"
                                    alt="avatar"
                                    className="w-25 pb-3"
                                />
                            </Row>
                            <Row>Байборин Пётр</Row>
                            <Row>baiborin.petr@mail.ru</Row>
                            <Row>
                                <Link onClick={handleClose} to="/" className={styles.link + ' p-0'}>
                                    Галерея
                                </Link>
                            </Row>
                            <Row>
                                <Link onClick={handleClose} to="/about_me" className={styles.link + ' p-0'}>
                                    Обо мне
                                </Link>
                            </Row>
                        </Container>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Header