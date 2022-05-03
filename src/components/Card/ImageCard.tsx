import React, {FC, useState} from 'react'
import {Button, Card} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {ImageType} from '../../types/types'

type PropsType = {
    img: ImageType
}
const ImageCard: FC<PropsType> = ({img}) => {

    const {url, id} = img

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const navigate = useNavigate()

    return (
        <Card style={{width: '12rem'}} onMouseEnter={handleShow} onMouseLeave={handleClose}>
            <Card.Img src={url}/>
            {show && <Button
                variant="primary"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
                onClick={()=>navigate(`/${id}`)}
            >Подробнее
            </Button>}
        </Card>
    )
}

export default ImageCard