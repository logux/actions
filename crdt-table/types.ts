import type { Client } from '@logux/client'
import { createCrdtDatabase, number, optional, string } from '@logux/client/db'
import type { Database } from '@nanostores/sql'
import type { Action } from '@logux/core'

import { defineCreatedCrdtTable } from './index.js'

let crdt = createCrdtDatabase({} as Client, {} as Database)

let userSchema = {
  age: number(),
  name: string(),
  role: optional(string())
}
let User = crdt.table('users', userSchema)

let userCreated = defineCreatedCrdtTable(User)

function processAction(action: Action): void {
  if (userCreated.match(action)) {
    console.log(action.fields.name)
  }
}

processAction(
  userCreated({ fields: { age: 30, name: 'John Smith' }, id: 'uuid' })
)
