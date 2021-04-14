import { defineAction } from '../index.js'

it('creates actions', () => {
  type RenameAction = {
    type: 'rename'
    name: string
  }
  let rename = defineAction<RenameAction>('rename')

  let newName = rename({ name: 'newName' })
  expect(newName).toEqual({ type: 'rename', name: 'newName' })

  expect(rename.match(newName)).toBe(true)
  expect(rename.match({ type: 'another' })).toBe(false)
})

it('creates action by function', () => {
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
  expect(newName).toEqual({ type: 'rename', id: 1, name: 'newName' })
})
