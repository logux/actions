/**
 * An error for `load()` callback to return `logux/undo` with 404.
 *
 * ```js
 * import { LoguxNotFoundError } from '@logux/actions'
 *
 * server.channel('posts/:id', {
 *   load () {
 *     throw new LoguxNotFoundError()
 *   },
 *   …
 * })
 * ```
 */
export class LoguxNotFoundError extends Error {
  name: 'LoguxNotFoundError'
  constructor()
}
