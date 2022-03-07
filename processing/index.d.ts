import { Action, AnyAction } from '@logux/core'

import { ActionCreator } from '../define-action/index.js'

export interface LoguxProcessedAction {
  type: 'logux/processed'
  id: string
}

export interface LoguxUndoAction<
  RevertedAction extends Action = AnyAction,
  Reason extends string = string
> {
  type: 'logux/undo'
  id: string
  reason: Reason
  action: RevertedAction
}

/**
 * Returns `logux/processed` action.
 */
export const loguxProcessed: ActionCreator<LoguxProcessedAction>

/**
 * Returns `logux/undo` action.
 */
export function loguxUndo<
  RevertedAction extends Action = AnyAction,
  Reason extends string = string
>(fields: {
  id: string
  reason: Reason
  action: RevertedAction
}): LoguxUndoAction<RevertedAction, Reason>

export namespace loguxUndo {
  export const type: 'logux/undo'
  export function match(action: AnyAction): action is LoguxUndoAction
}
