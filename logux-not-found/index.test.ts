import { LoguxNotFoundError } from '../index.js'

it('is error', () => {
  let error = new LoguxNotFoundError()
  expect(error.stack).toContain('LoguxNotFoundError')
})
