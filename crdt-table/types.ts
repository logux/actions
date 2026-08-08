import type { Client } from '@logux/client'
import { createCrdtDatabase, number, optional, string } from '@logux/client/db'
import type { Action } from '@logux/core'
import type { Database } from '@nanostores/sql'

import { defineCrdtTableActions } from '../index.js'

let crdt = createCrdtDatabase({} as Client, {} as Database)

let userSchema = {
  age: number(),
  name: string(),
  role: optional(string())
}
let User = crdt.table('users', userSchema)

let [userCreated] = defineCrdtTableActions(User)

function processAction(action: Action): void {
  if (userCreated.match(action)) {
    if ('id' in action) {
      console.log(action.fields.name)
    } else {
      console.log(action.records.length)
    }
  }
}

processAction(
  userCreated({ fields: { age: 30, name: 'John Smith' }, id: 'uuid' })
)
processAction(
  userCreated({ records: [{ age: 30, name: 'John Smith', id: 'uuid' }] })
)
