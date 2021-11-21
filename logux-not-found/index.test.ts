import { test } from 'uvu'
import { ok } from 'uvu/assert'

import { LoguxNotFoundError } from '../index.js'

test('is error', () => {
  let error = new LoguxNotFoundError()
  ok(error.stack?.includes('LoguxNotFoundError'))
})

test.run()
