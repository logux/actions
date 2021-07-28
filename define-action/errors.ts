import { Action } from '@logux/core'

import { defineAction } from '../index.js'

type RenameAction = {
  type: 'rename'
  name: string
}

// THROWS type '"other"' is not assignable to parameter of type '"rename"'
let rename = defineAction<RenameAction>('other')

function processAction(action: Action) {
  if (rename.match(action)) {
    console.log(action.name)
  } else {
    // THROWS Property 'name' does not exist on type 'Action'
    console.log(action.name)
  }
}

processAction({ type: 'other' })

let other = defineAction('rename')
