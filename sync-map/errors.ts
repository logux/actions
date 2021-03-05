import { defineSyncMap } from '@logux/state'
import { Action } from '@logux/core'

import { defineCreateSyncMap } from '../index.js'

type UserValue = {
  name: string
  age: number
  role?: string
}

let User = defineSyncMap<UserValue>('users')

let createUserCreate = defineCreateSyncMap<UserValue>(User.plural)

function processAction (action: Action) {
  if (createUserCreate.match(action)) {
    // THROWS 'firstName' does not exist on type 'Omit<UserValue
    console.log(action.fields.firstName)
  }
}

processAction(
  // THROWS 'age' is missing in type
  createUserCreate({ id: 'uuid', fields: { name: 'John Smith' } })
)
