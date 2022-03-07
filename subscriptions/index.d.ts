import { ActionCreator } from '../define-action/index.js'

export interface LoguxSubscribeAction {
  type: 'logux/subscribe'
  channel: string
  creating?: true
  filter?: {
    [key: string]: string | number | boolean
  }
  since?: {
    id: string
    time: number
  }
}

export interface LoguxSubscribedAction {
  type: 'logux/subscribed'
  channel: string
}

export interface LoguxUnsubscribeAction {
  type: 'logux/unsubscribe'
  channel: string
  filter?: {
    [key: string]: string | number | boolean
  }
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
