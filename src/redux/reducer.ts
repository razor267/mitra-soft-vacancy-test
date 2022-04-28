import {ActionsTypes, StateType} from '../types/types'

const initialState: StateType = {

}
export const reducer = (state = initialState, action: ActionsTypes): StateType => {
    switch (action.type) {
        default:
            return state
    }
}