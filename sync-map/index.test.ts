import { defineSyncMap } from '@logux/state'

import {
  defineCreatedSyncMap,
  defineChangedSyncMap,
  defineDeletedSyncMap,
  defineCreateSyncMap,
  defineChangeSyncMap,
  defineDeleteSyncMap
} from '../index.js'

let User = defineSyncMap<{ name: string }>('users')

it('creates created action', () => {
  let createUserCreated = defineCreatedSyncMap(User)
  expect(createUserCreated({ id: 'uuid', fields: { name: 'A' } })).toEqual({
    type: 'users/created',
    id: 'uuid',
    fields: { name: 'A' }
  })
})

it('creates changed action', () => {
  let createUserChanged = defineChangedSyncMap(User)
  expect(createUserChanged({ id: 'uuid', fields: { name: 'A' } })).toEqual({
    type: 'users/changed',
    id: 'uuid',
    fields: { name: 'A' }
  })
})

it('creates deleted action', () => {
  let createUserDeleted = defineDeletedSyncMap(User)
  expect(createUserDeleted({ id: 'uuid' })).toEqual({
    type: 'users/deleted',
    id: 'uuid'
  })
})

it('creates create action', () => {
  let createUserCreate = defineCreateSyncMap(User)
  expect(createUserCreate({ id: 'uuid', fields: { name: 'A' } })).toEqual({
    type: 'users/create',
    id: 'uuid',
    fields: { name: 'A' }
  })
})

it('creates change action', () => {
  let createUserChange = defineChangeSyncMap(User)
  expect(createUserChange({ id: 'uuid', fields: { name: 'A' } })).toEqual({
    type: 'users/change',
    id: 'uuid',
    fields: { name: 'A' }
  })
})

it('creates delete action', () => {
  let createUserDelete = defineDeleteSyncMap(User)
  expect(createUserDelete({ id: 'uuid' })).toEqual({
    type: 'users/delete',
    id: 'uuid'
  })
})
