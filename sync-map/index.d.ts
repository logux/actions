import { ActionCreator } from '../define-action/index.js'

type SyncMapValues = {
  [key: string]: string | number | boolean | undefined
}

export type SyncMapCreateAction<
  P extends string = any,
  V extends SyncMapValues = SyncMapValues
> = {
  type: `${P}/create`
  id: string
  fields: V
}

export type SyncMapCreatedAction<
  P extends string = any,
  V extends SyncMapValues = SyncMapValues
> = {
  type: `${P}/created`
  id: string
  fields: V
}

export type SyncMapChangeAction<
  P extends string = any,
  V extends SyncMapValues = SyncMapValues
> = {
  type: `${P}/change`
  id: string
  fields: Partial<V>
}

export type SyncMapChangedAction<
  P extends string = any,
  V extends SyncMapValues = SyncMapValues
> = {
  type: `${P}/changed`
  id: string
  fields: Partial<V>
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
  SyncMapCreatedAction<string, Omit<V, 'id'>>,
  { id: string; fields: Omit<V, 'id'> }
>

export function defineCreateSyncMap<V extends SyncMapValues> (
  plural: string
): ActionCreator<
  SyncMapCreateAction<string, Omit<V, 'id'>>,
  { id: string; fields: Omit<V, 'id'> }
>

export function defineChangedSyncMap<V extends SyncMapValues> (
  plural: string
): ActionCreator<
  SyncMapChangedAction<string, Omit<V, 'id'>>,
  { id: string; fields: Partial<Omit<V, 'id'>> }
>

export function defineChangeSyncMap<V extends SyncMapValues> (
  plural: string
): ActionCreator<
  SyncMapChangeAction<string, Omit<V, 'id'>>,
  { id: string; fields: Partial<Omit<V, 'id'>> }
>

export function defineDeletedSyncMap (
  plural: string
): ActionCreator<SyncMapDeletedAction<string>, { id: string }>

export function defineDeleteSyncMap (
  plural: string
): ActionCreator<SyncMapDeleteAction<string>, { id: string }>
