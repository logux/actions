import { ActionCreator } from '../define-action/index.js'

export type SyncMapValues = {
  [key: string]: string | number | boolean | undefined
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
): ActionCreator<SyncMapCreatedAction<V>, { id: string; fields: Omit<V, 'id'> }>

export function defineCreateSyncMap<V extends SyncMapValues>(
  plural: string
): ActionCreator<SyncMapCreateAction<V>, { id: string; fields: Omit<V, 'id'> }>

export function defineChangedSyncMap<V extends SyncMapValues>(
  plural: string
): ActionCreator<
  SyncMapChangedAction<V>,
  { id: string; fields: Partial<Omit<V, 'id'>> }
>

export function defineChangeSyncMap<V extends SyncMapValues>(
  plural: string
): ActionCreator<
  SyncMapChangeAction<V>,
  { id: string; fields: Partial<Omit<V, 'id'>> }
>

export function defineDeletedSyncMap(
  plural: string
): ActionCreator<SyncMapDeletedAction, { id: string }>

export function defineDeleteSyncMap(
  plural: string
): ActionCreator<SyncMapDeleteAction, { id: string }>

export function defineSyncMapActions<V extends SyncMapValues>(
  plural: string
): [
  ActionCreator<SyncMapCreateAction<V>, { id: string; fields: Omit<V, 'id'> }>,
  ActionCreator<
    SyncMapChangeAction<V>,
    { id: string; fields: Partial<Omit<V, 'id'>> }
  >,
  ActionCreator<SyncMapDeleteAction, { id: string }>,
  ActionCreator<SyncMapCreatedAction<V>, { id: string; fields: Omit<V, 'id'> }>,
  ActionCreator<
    SyncMapChangedAction<V>,
    { id: string; fields: Partial<Omit<V, 'id'>> }
  >,
  ActionCreator<SyncMapDeletedAction, { id: string }>
]
