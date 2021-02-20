import { Action, AnyAction } from '@logux/core'

type Fields = {
  [key: string]: any
}

export interface ActionCreator<A extends Action, F extends Fields> {
  type: string
  match: (action: AnyAction) => action is A
  (fields: F): A
}

export function defineAction<A extends Action, F extends Fields> (
  type: string
): ActionCreator<A, F>
