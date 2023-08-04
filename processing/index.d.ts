import type { Action, AnyAction } from '@logux/core'

import type { ActionCreator } from '../define-action/index.js'

export interface LoguxProcessedAction {
  id: string
  type: 'logux/processed'
}

export interface LoguxUndoAction<
  RevertedAction extends Action = AnyAction,
  Reason extends string = string
> {
  action: RevertedAction
  id: string
  reason: Reason
  type: 'logux/undo'
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
  action: RevertedAction
  id: string
  reason: Reason
}): LoguxUndoAction<RevertedAction, Reason>

export namespace loguxUndo {
  export const type: 'logux/undo'
  export function match(action: AnyAction): action is LoguxUndoAction
}
