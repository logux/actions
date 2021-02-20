import { defineAction } from '../index.js'

it('creates actions', () => {
  type RenameAction = {
    type: 'rename'
    name: string
  }
  let createRename = defineAction<RenameAction, { name: string }>('rename')

  let newName = createRename({ name: 'newName' })
  expect(newName).toEqual({ type: 'rename', name: 'newName' })

  expect(createRename.match(newName)).toBe(true)
  expect(createRename.match({ type: 'another' })).toBe(false)
})
