import { ActionCreator } from '../define-action/index.js'

export type SyncMapValues = {
  [key: string]: string | number | boolean | undefined
}

export type SyncMapCreateAction<
  P extends string = any,
  V extends SyncMapValues = SyncMapValues
> = {
  type: `${P}/create`
  id: string
  fields: Omit<V, 'id'>
}

export type SyncMapCreatedAction<
  P extends string = any,
  V extends SyncMapValues = SyncMapValues
> = {
  type: `${P}/created`
  id: string
  fields: Omit<V, 'id'>
}

export type SyncMapChangeAction<
  P extends string = any,
  V extends SyncMapValues = SyncMapValues
> = {
  type: `${P}/change`
  id: string
  fields: Partial<Omit<V, 'id'>>
}

export type SyncMapChangedAction<
  P extends string = any,
  V extends SyncMapValues = SyncMapValues
> = {
  type: `${P}/changed`
  id: string
  fields: Partial<Omit<V, 'id'>>
}

export type SyncMapDeleteAction<P extends string = any> = {
  type: `${P}/delete`
  id: string
}

export type SyncMapDeletedAction<P extends string = any> = {
  type: `${P}/deleted`
  id: string
}

export function defineCreatedSyncMap<V extends SyncMapValues> (
  plural: string
): ActionCreator<
  SyncMapCreatedAction<string, V>,
  { id: string; fields: Omit<V, 'id'> }
>

export function defineCreateSyncMap<V extends SyncMapValues> (
  plural: string
): ActionCreator<
  SyncMapCreateAction<string, V>,
  { id: string; fields: Omit<V, 'id'> }
>

export function defineChangedSyncMap<V extends SyncMapValues> (
  plural: string
): ActionCreator<
  SyncMapChangedAction<string, V>,
  { id: string; fields: Partial<Omit<V, 'id'>> }
>

export function defineChangeSyncMap<V extends SyncMapValues> (
  plural: string
): ActionCreator<
  SyncMapChangeAction<string, V>,
  { id: string; fields: Partial<Omit<V, 'id'>> }
>

export function defineDeletedSyncMap (
  plural: string
): ActionCreator<SyncMapDeletedAction<string>, { id: string }>

export function defineDeleteSyncMap (
  plural: string
): ActionCreator<SyncMapDeleteAction<string>, { id: string }>
