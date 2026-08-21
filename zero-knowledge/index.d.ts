import type { ActionCreator } from '../define-action/index.js'

export interface ZeroAction {
  d: Uint8Array
  iv: Uint8Array
  type: '0'
  compressed: boolean
}

export type ZeroCleanAction = {
  type: '0/clean'
} & ({ id: string } | { ids: string[] })

/**
 * Returns `0` action.
 */
export const zero: ActionCreator<ZeroAction>

/**
 * Returns `0/clean` action.
 */
export const zeroClean: ActionCreator<ZeroCleanAction>
