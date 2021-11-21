import { equal, is } from 'uvu/assert'
import { test } from 'uvu'

import { defineAction } from '../index.js'

test('creates actions', () => {
  type RenameAction = {
    type: 'rename'
    name: string
  }
  let rename = defineAction<RenameAction>('rename')

  let newName = rename({ name: 'newName' })
  equal(newName, { type: 'rename', name: 'newName' })

  is(rename.match(newName), true)
  is(rename.match({ type: 'another' }), false)
})

test('creates action by function', () => {
  type RenameAction = {
    type: 'rename'
    id: number
    name: string
  }
  let rename = defineAction(
    'rename',
    (id: number, name: string): RenameAction => ({ type: 'rename', id, name })
  )

  let newName = rename(1, 'newName')
  equal(newName, { type: 'rename', id: 1, name: 'newName' })
})

test.run()
