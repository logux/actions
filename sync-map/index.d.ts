import { ActionCreator } from '../define-action/index.js'

export type SyncMapTypes = string | number | boolean | undefined

export interface SyncMapValues {
  [key: string]: SyncMapTypes | SyncMapTypes[]
}

export interface SyncMapCreateAction<
  Value extends SyncMapValues = SyncMapValues
> {
  type: string
  id: string
  fields: Omit<Value, 'id'>
}

export interface SyncMapCreatedAction<
  Value extends SyncMapValues = SyncMapValues
> {
  type: string
  id: string
  fields: Omit<Value, 'id'>
}

export interface SyncMapChangeAction<
  Value extends SyncMapValues = SyncMapValues
> {
  type: string
  id: string
  fields: Partial<Omit<Value, 'id'>>
}

export interface SyncMapChangedAction<
  Value extends SyncMapValues = SyncMapValues
> {
  type: string
  id: string
  fields: Partial<Omit<Value, 'id'>>
}

export interface SyncMapDeleteAction {
  type: string
  id: string
}

export interface SyncMapDeletedAction {
  type: string
  id: string
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
