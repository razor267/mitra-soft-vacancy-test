import React from 'react'
import {useMatch, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {StateType} from '../../types/types'
import {actions} from '../../redux/actions'
import Page404 from '../Page404'
import {Button, Card} from 'react-bootstrap'

const ImageItem = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const match = useMatch('/:id')
    const images = useSelector((state: StateType) => state.images)

    if (images.length === 0) {
        dispatch(actions.getImages())
    }

    const image = images.find(item => item.id === Number(match?.params.id))

    if (!image) {
        return <Page404/>
    }

    debugger

    return (
        <Card style={{width: '24rem'}} className="text-center m-auto mt-2">
            <Card.Img src={image.url}/>
            <Card.Body>
                <Card.Title>Описание: {image.title}</Card.Title>
                <Card.Text>
                    <a href={image.url}>Ссылка</a>
                </Card.Text>
                <Button variant="primary" onClick={() => navigate('/')}>Назад</Button>
            </Card.Body>
        </Card>
    )
}

export default ImageItem