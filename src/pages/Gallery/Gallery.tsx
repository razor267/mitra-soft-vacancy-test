import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {actions} from '../../redux/actions'

const Gallery = () => {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(actions.getImages())
    }, [])

    return (
        <div>
            Gallery
        </div>
    )
}

export default Gallery