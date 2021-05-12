import { defineSyncMap } from '@logux/client'
import { Action } from '@logux/core'

import { defineCreateSyncMap } from '../index.js'

type UserValue = {
  id: string
  name: string
  age: number
  role?: string
}

let User = defineSyncMap<UserValue>('users')

let userCreate = defineCreateSyncMap<UserValue>(User.plural)

function processAction(action: Action): void {
  if (userCreate.match(action)) {
    console.log(action.fields.name)
  }
}

processAction(
  userCreate({ id: 'uuid', fields: { name: 'John Smith', age: 30 } })
)
