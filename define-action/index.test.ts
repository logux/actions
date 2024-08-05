import { deepStrictEqual, equal } from 'node:assert'
import { test } from 'node:test'

import { defineAction } from '../index.js'

test('creates actions', () => {
  type RenameAction = {
    name: string
    type: 'rename'
  }
  let rename = defineAction<RenameAction>('rename')

  let newName = rename({ name: 'newName' })
  deepStrictEqual(newName, { name: 'newName', type: 'rename' })

  equal(rename.match(newName), true)
  equal(rename.match({ type: 'another' }), false)
})

test('creates action by function', () => {
  type RenameAction = {
    id: number
    name: string
    type: 'rename'
  }
  let rename = defineAction(
    'rename',
    (id: number, name: string): RenameAction => ({ id, name, type: 'rename' })
  )

  let newName = rename(1, 'newName')
  deepStrictEqual(newName, { id: 1, name: 'newName', type: 'rename' })
})
