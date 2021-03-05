import { defineSyncMap } from '@logux/state'
import { Action } from '@logux/core'

import { defineCreateSyncMap } from '../index.js'

type UserValue = {
  id: string
  name: string
  age: number
  role?: string
}

let User = defineSyncMap<UserValue>('users')

let createUserCreate = defineCreateSyncMap<UserValue>(User.plural)

function processAction (action: Action): void {
  if (createUserCreate.match(action)) {
    console.log(action.fields.name)
  }
}

processAction(
  createUserCreate({ id: 'uuid', fields: { name: 'John Smith', age: 30 } })
)
