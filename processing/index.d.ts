import { Action, AnyAction } from '@logux/core'

import { ActionCreator } from '../define-action/index.js'

export type LoguxProcessedAction = {
  type: 'logux/processed'
  id: string
}

export type LoguxUndoAction<
  A extends Action = AnyAction,
  R extends string = string
> = {
  type: 'logux/undo'
  id: string
  reason: R
  action: A
}

export const createLoguxProcessed: ActionCreator<LoguxProcessedAction>

export function createLoguxUndo<
  A extends Action = AnyAction,
  R extends string = string
>(fields: { id: string; reason: R; action: A }): LoguxUndoAction<A, R>

export namespace createLoguxUndo {
  export const type: 'logux/undo'
  export function match(action: AnyAction): action is LoguxUndoAction
}
