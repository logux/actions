import type { Action } from '@logux/core'

import type { ActionPacker, PackedAction } from '../define-action/index.js'
import { defineAction, zeroPacker } from '../index.js'

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

let packers: ActionPacker[] = [zeroPacker]

function packAction(action: Action): PackedAction<Action> | undefined {
  for (let packer of packers) {
    let packed = packer.pack(action)
    if (packed) return packed
  }
  return undefined
}

packAction(rename({ name: 'New' }))
