import { syncMapTemplate } from '@logux/client'
import { equal } from 'uvu/assert'
import { test } from 'uvu'

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
let User = syncMapTemplate<UserValue>('users')

test('creates created action', () => {
  let userCreated = defineCreatedSyncMap<UserValue>(User.plural)
  equal(userCreated({ id: 'uuid', fields: { name: 'A' } }), {
    type: 'users/created',
    id: 'uuid',
    fields: { name: 'A' }
  })
})

test('creates changed action', () => {
  let userChanged = defineChangedSyncMap<UserValue>(User.plural)
  equal(userChanged({ id: 'uuid', fields: { name: 'A' } }), {
    type: 'users/changed',
    id: 'uuid',
    fields: { name: 'A' }
  })
})

test('creates deleted action', () => {
  let userDeleted = defineDeletedSyncMap(User.plural)
  equal(userDeleted({ id: 'uuid' }), {
    type: 'users/deleted',
    id: 'uuid'
  })
})

test('creates create action', () => {
  let userCreate = defineCreateSyncMap<UserValue>(User.plural)
  equal(userCreate({ id: 'uuid', fields: { name: 'A' } }), {
    type: 'users/create',
    id: 'uuid',
    fields: { name: 'A' }
  })
})

test('creates change action', () => {
  let userChange = defineChangeSyncMap<UserValue>(User.plural)
  equal(userChange({ id: 'uuid', fields: { name: 'A' } }), {
    type: 'users/change',
    id: 'uuid',
    fields: { name: 'A' }
  })
})

test('creates delete action', () => {
  let userDelete = defineDeleteSyncMap(User.plural)
  equal(userDelete({ id: 'uuid' }), {
    type: 'users/delete',
    id: 'uuid'
  })
})

test('creates everything', () => {
  let actions = defineSyncMapActions<UserValue>(User.plural)
  equal(
    actions.map(i => i.type),
    [
      'users/create',
      'users/change',
      'users/delete',
      'users/created',
      'users/changed',
      'users/deleted'
    ]
  )
})

test.run()
