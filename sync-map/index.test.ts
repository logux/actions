import { defineSyncMap } from '@logux/client'

import {
  defineSyncMapActions,
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
  let userCreated = defineCreatedSyncMap<UserValue>(User.plural)
  expect(userCreated({ id: 'uuid', fields: { name: 'A' } })).toEqual({
    type: 'users/created',
    id: 'uuid',
    fields: { name: 'A' }
  })
})

it('creates changed action', () => {
  let userChanged = defineChangedSyncMap<UserValue>(User.plural)
  expect(userChanged({ id: 'uuid', fields: { name: 'A' } })).toEqual({
    type: 'users/changed',
    id: 'uuid',
    fields: { name: 'A' }
  })
})

it('creates deleted action', () => {
  let userDeleted = defineDeletedSyncMap(User.plural)
  expect(userDeleted({ id: 'uuid' })).toEqual({
    type: 'users/deleted',
    id: 'uuid'
  })
})

it('creates create action', () => {
  let userCreate = defineCreateSyncMap<UserValue>(User.plural)
  expect(userCreate({ id: 'uuid', fields: { name: 'A' } })).toEqual({
    type: 'users/create',
    id: 'uuid',
    fields: { name: 'A' }
  })
})

it('creates change action', () => {
  let userChange = defineChangeSyncMap<UserValue>(User.plural)
  expect(userChange({ id: 'uuid', fields: { name: 'A' } })).toEqual({
    type: 'users/change',
    id: 'uuid',
    fields: { name: 'A' }
  })
})

it('creates delete action', () => {
  let userDelete = defineDeleteSyncMap(User.plural)
  expect(userDelete({ id: 'uuid' })).toEqual({
    type: 'users/delete',
    id: 'uuid'
  })
})

it('creates everything', () => {
  let actions = defineSyncMapActions<UserValue>(User.plural)
  expect(actions.map(i => i.type)).toEqual([
    'users/create',
    'users/change',
    'users/delete',
    'users/created',
    'users/changed',
    'users/deleted'
  ])
})
