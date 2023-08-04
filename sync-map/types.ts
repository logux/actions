import { syncMapTemplate } from '@logux/client'
import type { Action } from '@logux/core'

import { defineCreateSyncMap } from '../index.js'

type UserValue = {
  age: number
  id: string
  name: string
  role?: string
}

let User = syncMapTemplate<UserValue>('users')

let userCreate = defineCreateSyncMap<UserValue>(User.plural)

function processAction(action: Action): void {
  if (userCreate.match(action)) {
    console.log(action.fields.name)
  }
}

processAction(
  userCreate({ fields: { age: 30, name: 'John Smith' }, id: 'uuid' })
)
