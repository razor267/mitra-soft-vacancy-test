import {actions} from '../redux/actions'

export type StateType = {}

type InferActionsTypes<T> = T extends {[key: string]: infer U} ? U : never
export type ActionsTypes = ReturnType<InferActionsTypes<typeof actions>>