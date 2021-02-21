import { defineSyncMap } from '@logux/state'
import { Action } from '@logux/core'

import { defineCreateSyncMap } from './index.js'

let User = defineSyncMap<{ name: string; age: number; role?: string }>('users')

let createUserCreate = defineCreateSyncMap(User)

function processAction (action: Action) {
  if (createUserCreate.match(action)) {
    // THROWS 'firstName' does not exist on type '{ name: string;
    console.log(action.fields.firstName)
  }
}

processAction(
  // THROWS 'age' is missing in type
  createUserCreate({ id: 'uuid', fields: { name: 'John Smith' } })
)
