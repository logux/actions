import { Action } from '@logux/core'

import { defineAction, zeroPacker, type ActionPackerMap } from '../index.js'
import { PackedAction } from './index.js'

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

declare function createStore<Packers extends ActionPackerMap<Packers>>(
  packers: Packers
): Packers

let packers = createStore({
  '0': zeroPacker
})

function packAction(action: Action): PackedAction<Action> | undefined {
  // THROWS 'Action' is missing the following properties from type 'ZeroAction'
  let packed = packers['0'].pack(action)
  if (packed) return packed
}

packAction(rename({ name: 'New' }))

let wrongKey = createStore({
  // THROWS not assignable to type 'ActionPacker<Action & { type: "0/clean"; }
  '0/clean': zeroPacker
})

console.log(wrongKey)
