import { SyncMapBuilder } from '@logux/state'

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

export function defineCreatedSyncMap<
  P extends string,
  V extends SyncMapValues
> (
  Builder: SyncMapBuilder<V>
): ActionCreator<SyncMapCreatedAction<P, V>, { id: string; fields: V }>

export function defineCreateSyncMap<P extends string, V extends SyncMapValues> (
  Builder: SyncMapBuilder<V>
): ActionCreator<SyncMapCreateAction<P, V>, { id: string; fields: V }>

export function defineChangedSyncMap<
  P extends string,
  V extends SyncMapValues
> (
  Builder: SyncMapBuilder<V>
): ActionCreator<SyncMapChangedAction<P, V>, { id: string; fields: Partial<V> }>

export function defineChangeSyncMap<P extends string, V extends SyncMapValues> (
  Builder: SyncMapBuilder<V>
): ActionCreator<SyncMapChangeAction<P, V>, { id: string; fields: Partial<V> }>

export function defineDeletedSyncMap<
  P extends string,
  V extends SyncMapValues
> (
  Builder: SyncMapBuilder<V>
): ActionCreator<SyncMapDeletedAction<P>, { id: string }>

export function defineDeleteSyncMap<P extends string, V extends SyncMapValues> (
  Builder: SyncMapBuilder<V>
): ActionCreator<SyncMapDeleteAction<P>, { id: string }>
