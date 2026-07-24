import { TestClient } from '@logux/client'
import { createCrdtDatabase, number, optional, string } from '@logux/client/db'
import { openDb } from '@nanostores/sql'
import { nodeDriver } from '@nanostores/sql/node'
import { deepStrictEqual } from 'node:assert'
import { test } from 'node:test'

import {
  defineChangedCrdtTable,
  defineCreatedCrdtTable,
  defineCrdtTableActions,
  defineDeletedCrdtTable
} from '../index.js'

let client = new TestClient('10')
let db = openDb(nodeDriver(':memory:'))
let crdt = createCrdtDatabase(client, db)
let User = crdt.table('users', {
  age: optional(number()),
  name: string()
})

test('creates created action', () => {
  let userCreated = defineCreatedCrdtTable(User)
  deepStrictEqual(userCreated({ fields: { name: 'A' }, id: 'uuid' }), {
    fields: { name: 'A' },
    id: 'uuid',
    type: 'users/created'
  })
})

test('creates changed action', () => {
  let userChanged = defineChangedCrdtTable(User)
  deepStrictEqual(userChanged({ fields: { name: 'A' }, id: 'uuid' }), {
    fields: { name: 'A' },
    id: 'uuid',
    type: 'users/changed'
  })
})

test('creates deleted action', () => {
  let userDeleted = defineDeletedCrdtTable(User)
  deepStrictEqual(userDeleted({ id: 'uuid' }), {
    id: 'uuid',
    type: 'users/deleted'
  })
})

test('creates everything', () => {
  let actions = defineCrdtTableActions(User)
  deepStrictEqual(
    actions.map(i => i.type),
    ['users/created', 'users/changed', 'users/deleted']
  )
})
