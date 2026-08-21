import type { ActionCreator } from '../define-action/index.js'
import type { zero } from '../zero-knowledge/index.js'

export interface ShadowAction {
  id: string
  type: 'shadow'
}

/**
 * Returns `shadow` action. It is useful for client to clean
 * server from encrypted {@link zero} actions.
 *
 * It replaces materialized action in the log, keeping its ID,
 * reasons and indexes, but dropping the body.
 *
 * By tracking `shadow` reasons you can detect when you can ask server
 * to remove original action.
 */
export const shadow: ActionCreator<ShadowAction>
