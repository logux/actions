import { defineSyncMap } from '@logux/state'
import { Action } from '@logux/core'

import { defineCreateSyncMap } from '../index.js'

let User = defineSyncMap<{ name: string; age: number; role?: string }>('users')

let createUserCreate = defineCreateSyncMap(User)

function processAction (action: Action) {
  if (createUserCreate.match(action)) {
    console.log(action.fields.name)
  }
}

processAction(
  createUserCreate({ id: 'uuid', fields: { name: 'John Smith', age: 30 } })
)
