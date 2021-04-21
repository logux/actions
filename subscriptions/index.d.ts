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

export const loguxSubscribe: ActionCreator<LoguxSubscribeAction>

export const loguxSubscribed: ActionCreator<LoguxSubscribedAction>

export const loguxUnsubscribe: ActionCreator<LoguxSubscribeAction>
