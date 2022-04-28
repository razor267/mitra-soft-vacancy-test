import {call, put, takeEvery} from 'redux-saga/effects'
import {actions} from './actions'
import {ImageType} from '../types/types'

function* getImagesAsync() {
    const data: ImageType[] = yield call(() => {
        return fetch('https://jsonplaceholder.typicode.com/photos?_limit=24')
            .then(res => res.json())
    })
    yield put(actions.addAllImages(data))
}

function* getImagesSaga() {
    yield takeEvery('GET_IMAGES', getImagesAsync)
}

export default getImagesSaga