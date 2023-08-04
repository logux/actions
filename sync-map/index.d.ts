import type { ActionCreator } from '../define-action/index.js'

export type SyncMapTypes = boolean | null | number | string | undefined

export interface SyncMapValues {
  [key: string]: SyncMapTypes | SyncMapTypes[]
}

export interface SyncMapCreateAction<
  Value extends SyncMapValues = SyncMapValues
> {
  fields: Omit<Value, 'id'>
  id: string
  type: string
}

export interface SyncMapCreatedAction<
  Value extends SyncMapValues = SyncMapValues
> {
  fields: Omit<Value, 'id'>
  id: string
  type: string
}

export interface SyncMapChangeAction<
  Value extends SyncMapValues = SyncMapValues
> {
  fields: Partial<Omit<Value, 'id'>>
  id: string
  type: string
}

export interface SyncMapChangedAction<
  Value extends SyncMapValues = SyncMapValues
> {
  fields: Partial<Omit<Value, 'id'>>
  id: string
  type: string
}

export interface SyncMapDeleteAction {
  id: string
  type: string
}

export interface SyncMapDeletedAction {
  id: string
  type: string
}

export function defineCreatedSyncMap<Value extends SyncMapValues>(
  plural: string
): ActionCreator<SyncMapCreatedAction<Value>>

export function defineCreateSyncMap<Value extends SyncMapValues>(
  plural: string
): ActionCreator<SyncMapCreateAction<Value>>

export function defineChangedSyncMap<Value extends SyncMapValues>(
  plural: string
): ActionCreator<SyncMapChangedAction<Value>>

export function defineChangeSyncMap<Value extends SyncMapValues>(
  plural: string
): ActionCreator<SyncMapChangeAction<Value>>

export function defineDeletedSyncMap(
  plural: string
): ActionCreator<SyncMapDeletedAction>

export function defineDeleteSyncMap(
  plural: string
): ActionCreator<SyncMapDeleteAction>

/**
 * Returns actions for CRDT Map.
 *
 * ```js
 * import { defineSyncMapActions } from '@logux/actions'
 *
 * const [
 *   createUserAction,
 *   changeUserAction,
 *   deleteUserAction,
 *   createdUserAction,
 *   changedUserAction,
 *   deletedUserAction
 * ] = defineSyncMapActions('users')
 * ```
 */
export function defineSyncMapActions<Value extends SyncMapValues>(
  plural: string
): [
  ActionCreator<SyncMapCreateAction<Value>>,
  ActionCreator<SyncMapChangeAction<Value>>,
  ActionCreator<SyncMapDeleteAction>,
  ActionCreator<SyncMapCreatedAction<Value>>,
  ActionCreator<SyncMapChangedAction<Value>>,
  ActionCreator<SyncMapDeletedAction>
]
