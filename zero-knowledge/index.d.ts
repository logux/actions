import type { ActionCreator } from '../define-action/index.js'

export interface ZeroAction {
  d: string
  iv: string
  type: '0'
}

export interface ZeroCleanAction {
  id: string
  type: '0/clean'
}

/**
 * Returns `0` action.
 */
export const zero: ActionCreator<ZeroAction>

/**
 * Returns `0/clean` action.
 */
export const zeroClean: ActionCreator<ZeroCleanAction>
