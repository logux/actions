import { ActionCreator } from '../define-action/index.js'

export type ZeroAction = {
  type: '0'
  d: string
  iv: string
}

export type ZeroCleanAction = {
  type: '0/clean'
  id: string
}

export const zero: ActionCreator<ZeroAction>

export const zeroClean: ActionCreator<ZeroCleanAction>
