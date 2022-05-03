import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {actions} from '../../redux/actions'
import {StateType} from '../../types/types'
import {Col, Container, Row} from 'react-bootstrap'
import ImageCard from '../../components/Card'

const Gallery = () => {
    const dispatch = useDispatch()
    const images = useSelector((state: StateType) => state.images)

    useEffect(() => {
        dispatch(actions.getImages())
    }, [dispatch])

    let albumNumber = 1
    for (let i = 0; i < images.length; i++) {
        images[i].albumId = albumNumber
        if (albumNumber < 4) {
            albumNumber++
        } else {
            albumNumber = 1
        }
    }

    const newImages = [
        images.filter(item => item.albumId === 1),
        images.filter(item => item.albumId === 2),
        images.filter(item => item.albumId === 3),
        images.filter(item => item.albumId === 4)
    ]

    return (
        <Container fluid className="d-grid mt-2 gap-3">
            {newImages.map((album, index ) => <Row
                className="gap-2 bg-secondary p-2"
                key={index}
            >
                <Row><h4 className="text-center">Альбом {index + 1}</h4></Row>
                <Row className="gap-2">{newImages[index].map(item => <Col key={item.id}>
                    <ImageCard img={item}/>
                </Col>)}</Row>
            </Row>)}
        </Container>
    )
}

export default Gallery