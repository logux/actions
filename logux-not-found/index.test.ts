import { ok } from 'node:assert'
import { test } from 'node:test'

import { LoguxNotFoundError } from '../index.js'

test('is error', () => {
  let error = new LoguxNotFoundError()
  ok(error.stack?.includes('LoguxNotFoundError'))
})
