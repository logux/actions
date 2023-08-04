import type { Action } from '@logux/core'

import { defineAction } from '../index.js'

type RenameAction = {
  name: string
  type: 'rename'
}
let rename = defineAction<RenameAction>('rename')

function processAction(action: Action): void {
  if (rename.match(action)) {
    console.log(action.name)
  }
}

processAction({ type: 'other' })
