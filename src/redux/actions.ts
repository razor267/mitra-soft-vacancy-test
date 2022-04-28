import {ImageType} from '../types/types'

export const actions = {
    getImages: () => ({
        type: 'GET_IMAGES'
    } as const),
    addAllImages: (images: ImageType[]) => ({
        type: 'ADD_ALL_IMAGES',
        images
    } as const),
}