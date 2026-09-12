import type { Action, AnyAction } from '@logux/core'

export interface LoguxPrepareAction<PreparedAction extends Action = AnyAction> {
  actions: PreparedAction[]
  type: 'logux/prepare'
}

/**
 * Returns `logux/prepare` action.
 */
export function loguxPrepare<
  PreparedAction extends Action = AnyAction
>(fields: { actions: PreparedAction[] }): LoguxPrepareAction<PreparedAction>

export namespace loguxPrepare {
  export const type: 'logux/prepare'
  export function match(action: Action): action is LoguxPrepareAction
}
