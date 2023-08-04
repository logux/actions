import type { ActionCreator } from '../define-action/index.js'

export interface LoguxSubscribeAction {
  channel: string
  creating?: true
  filter?: {
    [key: string]: boolean | number | string
  }
  since?: {
    id: string
    time: number
  }
  type: 'logux/subscribe'
}

export interface LoguxSubscribedAction {
  channel: string
  type: 'logux/subscribed'
}

export interface LoguxUnsubscribeAction {
  channel: string
  filter?: {
    [key: string]: boolean | number | string
  }
  type: 'logux/unsubscribe'
}

/**
 * Returns `logux/subscribe` action.
 */
export const loguxSubscribe: ActionCreator<LoguxSubscribeAction>

/**
 * Returns `logux/subscribed` action.
 */
export const loguxSubscribed: ActionCreator<LoguxSubscribedAction>

/**
 * Returns `logux/unsubscribe` action.
 */
export const loguxUnsubscribe: ActionCreator<LoguxSubscribeAction>
