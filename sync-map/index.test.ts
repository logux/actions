import { syncMapTemplate } from '@logux/client'
import { test } from 'uvu'
import { equal } from 'uvu/assert'

import {
  defineChangedSyncMap,
  defineChangeSyncMap,
  defineCreatedSyncMap,
  defineCreateSyncMap,
  defineDeletedSyncMap,
  defineDeleteSyncMap,
  defineSyncMapActions
} from '../index.js'

type UserValue = {
  name: string
}
let User = syncMapTemplate<UserValue>('users')

test('creates created action', () => {
  let userCreated = defineCreatedSyncMap<UserValue>(User.plural)
  equal(userCreated({ fields: { name: 'A' }, id: 'uuid' }), {
    fields: { name: 'A' },
    id: 'uuid',
    type: 'users/created'
  })
})

test('creates changed action', () => {
  let userChanged = defineChangedSyncMap<UserValue>(User.plural)
  equal(userChanged({ fields: { name: 'A' }, id: 'uuid' }), {
    fields: { name: 'A' },
    id: 'uuid',
    type: 'users/changed'
  })
})

test('creates deleted action', () => {
  let userDeleted = defineDeletedSyncMap(User.plural)
  equal(userDeleted({ id: 'uuid' }), {
    id: 'uuid',
    type: 'users/deleted'
  })
})

test('creates create action', () => {
  let userCreate = defineCreateSyncMap<UserValue>(User.plural)
  equal(userCreate({ fields: { name: 'A' }, id: 'uuid' }), {
    fields: { name: 'A' },
    id: 'uuid',
    type: 'users/create'
  })
})

test('creates change action', () => {
  let userChange = defineChangeSyncMap<UserValue>(User.plural)
  equal(userChange({ fields: { name: 'A' }, id: 'uuid' }), {
    fields: { name: 'A' },
    id: 'uuid',
    type: 'users/change'
  })
})

test('creates delete action', () => {
  let userDelete = defineDeleteSyncMap(User.plural)
  equal(userDelete({ id: 'uuid' }), {
    id: 'uuid',
    type: 'users/delete'
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
