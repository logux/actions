import type { Action } from '@logux/core'

import type { ActionPackerMap, PackedAction } from '../define-action/index.js'
import { defineAction, zero, zeroPacker } from '../index.js'

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

declare function createStore<Packers extends ActionPackerMap<Packers>>(
  packers: Packers
): Packers

let packers = createStore({
  '0': zeroPacker
})

function packAction(action: Action): PackedAction<Action> | undefined {
  if (zero.match(action)) {
    let packed = packers['0'].pack(action)
    if (packed) return packed
  }
  return undefined
}

packAction(rename({ name: 'New' }))

let standalone = { '0': zeroPacker }
let checked: ActionPackerMap<typeof standalone> = standalone

console.log(checked)
