import { Action } from '@logux/core'

import { createLoguxUndo } from '../index.js'

function processAction (action: Action) {
  if (createLoguxUndo.match(action)) {
    console.log(action.action)
  }
}

processAction(
  createLoguxUndo({
    id: '1 1:1:0 0',
    reason: 'error',
    action: { type: 'some' }
  })
)
