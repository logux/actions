import { ActionCreator } from '../define-action/index.js'

export type SyncMapValue = string | number | boolean | undefined

export type SyncMapValues = {
  [key: string]: SyncMapValue | SyncMapValue[]
}

export type SyncMapCreateAction<V extends SyncMapValues = SyncMapValues> = {
  type: string
  id: string
  fields: Omit<V, 'id'>
}

export type SyncMapCreatedAction<V extends SyncMapValues = SyncMapValues> = {
  type: string
  id: string
  fields: Omit<V, 'id'>
}

export type SyncMapChangeAction<V extends SyncMapValues = SyncMapValues> = {
  type: string
  id: string
  fields: Partial<Omit<V, 'id'>>
}

export type SyncMapChangedAction<V extends SyncMapValues = SyncMapValues> = {
  type: string
  id: string
  fields: Partial<Omit<V, 'id'>>
}

export type SyncMapDeleteAction = {
  type: string
  id: string
}

export type SyncMapDeletedAction = {
  type: string
  id: string
}

export function defineCreatedSyncMap<V extends SyncMapValues>(
  plural: string
): ActionCreator<SyncMapCreatedAction<V>>

export function defineCreateSyncMap<V extends SyncMapValues>(
  plural: string
): ActionCreator<SyncMapCreateAction<V>>

export function defineChangedSyncMap<V extends SyncMapValues>(
  plural: string
): ActionCreator<SyncMapChangedAction<V>>

export function defineChangeSyncMap<V extends SyncMapValues>(
  plural: string
): ActionCreator<SyncMapChangeAction<V>>

export function defineDeletedSyncMap(
  plural: string
): ActionCreator<SyncMapDeletedAction>

export function defineDeleteSyncMap(
  plural: string
): ActionCreator<SyncMapDeleteAction>

export function defineSyncMapActions<V extends SyncMapValues>(
  plural: string
): [
  ActionCreator<SyncMapCreateAction<V>>,
  ActionCreator<SyncMapChangeAction<V>>,
  ActionCreator<SyncMapDeleteAction>,
  ActionCreator<SyncMapCreatedAction<V>>,
  ActionCreator<SyncMapChangedAction<V>>,
  ActionCreator<SyncMapDeletedAction>
]
