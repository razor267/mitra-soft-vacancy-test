import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

const Page404 = () => (
    <Container  className="text-center m-auto mt-5">
        <Row>
            <h1>404</h1>
        </Row>
        <Row>
            <Col><h2>Такой страницы не существует</h2></Col>
        </Row>
    </Container>
)

export default Page404