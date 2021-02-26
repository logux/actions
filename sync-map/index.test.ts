import { defineSyncMap } from '@logux/state'

import {
  defineCreatedSyncMap,
  defineChangedSyncMap,
  defineDeletedSyncMap,
  defineCreateSyncMap,
  defineChangeSyncMap,
  defineDeleteSyncMap
} from '../index.js'

type UserValue = {
  name: string
}
let User = defineSyncMap<UserValue>('users')

it('creates created action', () => {
  let createUserCreated = defineCreatedSyncMap<UserValue>(User.plural)
  expect(createUserCreated({ id: 'uuid', fields: { name: 'A' } })).toEqual({
    type: 'users/created',
    id: 'uuid',
    fields: { name: 'A' }
  })
})

it('creates changed action', () => {
  let createUserChanged = defineChangedSyncMap<UserValue>(User.plural)
  expect(createUserChanged({ id: 'uuid', fields: { name: 'A' } })).toEqual({
    type: 'users/changed',
    id: 'uuid',
    fields: { name: 'A' }
  })
})

it('creates deleted action', () => {
  let createUserDeleted = defineDeletedSyncMap(User.plural)
  expect(createUserDeleted({ id: 'uuid' })).toEqual({
    type: 'users/deleted',
    id: 'uuid'
  })
})

it('creates create action', () => {
  let createUserCreate = defineCreateSyncMap<UserValue>(User.plural)
  expect(createUserCreate({ id: 'uuid', fields: { name: 'A' } })).toEqual({
    type: 'users/create',
    id: 'uuid',
    fields: { name: 'A' }
  })
})

it('creates change action', () => {
  let createUserChange = defineChangeSyncMap<UserValue>(User.plural)
  expect(createUserChange({ id: 'uuid', fields: { name: 'A' } })).toEqual({
    type: 'users/change',
    id: 'uuid',
    fields: { name: 'A' }
  })
})

it('creates delete action', () => {
  let createUserDelete = defineDeleteSyncMap(User.plural)
  expect(createUserDelete({ id: 'uuid' })).toEqual({
    type: 'users/delete',
    id: 'uuid'
  })
})
