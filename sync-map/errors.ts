import { syncMapTemplate } from '@logux/client'
import { Action } from '@logux/core'

import { defineCreateSyncMap } from '../index.js'

type UserValue = {
  name: string
  age: number
  role?: string
}

let User = syncMapTemplate<UserValue>('users')

let userCreate = defineCreateSyncMap<UserValue>(User.plural)

function processAction(action: Action) {
  if (userCreate.match(action)) {
    // THROWS 'firstName' does not exist on type 'Omit<UserValue
    console.log(action.fields.firstName)
  }
}

processAction(
  // THROWS 'age' is missing in type
  userCreate({ id: 'uuid', fields: { name: 'John Smith' } })
)
