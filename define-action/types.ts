import { Action } from '@logux/core'

import { defineAction } from '../index.js'

type RenameAction = {
  type: 'rename'
  name: string
}
let createRename = defineAction<RenameAction, { name: string }>('rename')

function processAction (action: Action): void {
  if (createRename.match(action)) {
    console.log(action.name)
  }
}

processAction({ type: 'other' })
