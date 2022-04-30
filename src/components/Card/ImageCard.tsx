import React, {FC, useState} from 'react'
import {Button, Card} from 'react-bootstrap'

type PropsType = {
    url: string
}
const ImageCard: FC<PropsType> = ({url}) => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

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
            >Подробнее
            </Button>}
        </Card>
    )
}

export default ImageCard