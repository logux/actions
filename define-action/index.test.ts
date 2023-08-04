import { test } from 'uvu'
import { equal, is } from 'uvu/assert'

import { defineAction } from '../index.js'

test('creates actions', () => {
  type RenameAction = {
    name: string
    type: 'rename'
  }
  let rename = defineAction<RenameAction>('rename')

  let newName = rename({ name: 'newName' })
  equal(newName, { name: 'newName', type: 'rename' })

  is(rename.match(newName), true)
  is(rename.match({ type: 'another' }), false)
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
  equal(newName, { id: 1, name: 'newName', type: 'rename' })
})

test.run()
