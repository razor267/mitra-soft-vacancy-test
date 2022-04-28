import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import {reducer} from './reducer'
import createSagaMiddleware from 'redux-saga'
import getImagesSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(getImagesSaga)