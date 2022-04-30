import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {actions} from '../../redux/actions'
import {StateType} from '../../types/types'
import {Button, Card, Col, Container, Row} from 'react-bootstrap'

const Gallery = () => {
    const dispatch = useDispatch()
    const images = useSelector((state: StateType) => state.images)

    useEffect(() => {
        dispatch(actions.getImages())
    }, [dispatch])

    return (
        <Container fluid className="d-grid mt-2">
            <Row xs="auto" className="gap-2">
                {images.map(item => <Col key={item.id}>
                        <Card style={{width: '12rem'}}>
                            <Card.Img variant="top" src={item.url}/>
                            <Button>click</Button>
                        </Card>
                </Col>)}
            </Row>
        </Container>
    )
}

export default Gallery