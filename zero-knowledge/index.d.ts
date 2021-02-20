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

export const createZero: ActionCreator<ZeroAction, { d: string; iv: string }>

export const createZeroClean: ActionCreator<ZeroCleanAction, { id: string }>
