import type { Action } from '@logux/core'

import { loguxPrepare } from '../index.js'

function processAction(action: Action): void {
  if (loguxPrepare.match(action)) {
    console.log(action.actions)
  }
}

processAction(
  loguxPrepare({
    actions: [{ type: 'some' }]
  })
)
