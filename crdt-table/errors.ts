import type { Client } from '@logux/client'
import { createCrdtDatabase, number, string } from '@logux/client/db'
import { Action } from '@logux/core'
import type { Database } from '@nanostores/sql'

import { defineCreatedCrdtTable } from './index.js'

let crdt = createCrdtDatabase({} as Client, {} as Database)

let userSchema = {
  age: number(),
  name: string()
}
let User = crdt.table('users', userSchema)

let userCreated = defineCreatedCrdtTable(User)

function processAction(action: Action) {
  if (userCreated.match(action)) {
    // THROWS Property 'fields' does not exist on type
    console.log(action.fields.name)
    if (`id` in action) {
      // THROWS 'firstName' does not exist on type
      console.log(action.fields.firstName)
    }
  }
}

processAction(
  // THROWS is not assignable to type
  userCreated({ fields: { name: 'John Smith' }, id: 'uuid' })
)
