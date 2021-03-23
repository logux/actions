import { defineAction } from '../index.js'

it('creates actions', () => {
  type RenameAction = {
    type: 'rename'
    name: string
  }
  let createRename = defineAction<RenameAction>('rename')

  let newName = createRename({ name: 'newName' })
  expect(newName).toEqual({ type: 'rename', name: 'newName' })

  expect(createRename.match(newName)).toBe(true)
  expect(createRename.match({ type: 'another' })).toBe(false)
})

it('creates action by function', () => {
  type RenameAction = {
    type: 'rename'
    id: number
    name: string
  }
  let createRename = defineAction(
    'rename',
    (id: number, name: string): RenameAction => ({ type: 'rename', id, name })
  )

  let newName = createRename(1, 'newName')
  expect(newName).toEqual({ type: 'rename', id: 1, name: 'newName' })
})
