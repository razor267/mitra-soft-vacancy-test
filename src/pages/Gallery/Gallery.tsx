import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {actions} from '../../redux/actions'
import {StateType} from '../../types/types'

const Gallery = () => {
    const dispatch = useDispatch()
    const images = useSelector((state: StateType) => state.images)

    useEffect(()=> {
        dispatch(actions.getImages())
    }, [dispatch])

    return (
        <div>
            {images.map(item=><div key={item.id}><img src={item.url} alt={item.id.toString()}/></div>)}
        </div>
    )
}

export default Gallery