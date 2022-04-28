import {call, put, takeEvery} from 'redux-saga/effects'
import {actions} from './actions'

function* getImagesSaga() {
    yield takeEvery('GET_IMAGES', getImagesAsync)
}

function* getImagesAsync() {
    yield put(actions.getImages())
    const data: ResponseGenerator = yield call(() => {
            return fetch('https://jsonplaceholder.typicode.com/photos?_limit=24')
                .then(res => res.json())
        }
    )
    debugger
}

export default getImagesSaga

export interface ResponseGenerator {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string
}