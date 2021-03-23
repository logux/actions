import { Action, AnyAction } from '@logux/core'

type Fields = {
  [key: string]: any
}

export interface ActionCreator<
  A extends Action,
  F extends any[] = [Omit<A, 'type'>]
> {
  type: string
  match: (action: AnyAction) => action is A
  (...args: F): A
}

interface DefineAction {
  <A extends Action>(type: string): ActionCreator<A, [Omit<A, 'type'>]>

  <A extends Action, P extends any[]>(
    type: string,
    creator: (...args: P) => A
  ): ActionCreator<A, P>
}

export const defineAction: DefineAction
