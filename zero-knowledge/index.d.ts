import { ActionCreator } from '../define-action/index.js'

export interface ZeroAction {
  type: '0'
  d: string
  iv: string
}

export interface ZeroCleanAction {
  type: '0/clean'
  id: string
}

/**
 * Returns `0` action.
 */
export const zero: ActionCreator<ZeroAction>

/**
 * Returns `0/clean` action.
 */
export const zeroClean: ActionCreator<ZeroCleanAction>
