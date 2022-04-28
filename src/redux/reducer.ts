import {ActionsTypes, StateType} from '../types/types'

const initialState: StateType = {
    images: []
}
export const reducer = (state = initialState, action: ActionsTypes): StateType => {
    switch (action.type) {
        case 'GET_IMAGES':
            return {
                ...state,
            }
        case 'ADD_ALL_IMAGES':
            return {
                ...state,
                images: action.images
            }
        default:
            return state
    }
}