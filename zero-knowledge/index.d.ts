import type { ActionCreator, ActionPacker } from '../define-action/index.js'

export interface ZeroAction {
  compressed: boolean
  d: Uint8Array
  iv: Uint8Array
  type: '0'
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

/**
 * Packer to `0` action to binary format to use in SQL stores.
 */
export const zeroPacker: ActionPacker<
  ZeroAction,
  Pick<ZeroAction, 'type' | 'compressed'>
>
