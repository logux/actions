import { ActionCreator } from '../define-action/index.js'

export type LoguxSubscribeAction = {
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

export type LoguxUnsubscribeAction = {
  type: 'logux/unsubscribe'
  channel: string
  filter?: {
    [key: string]: string | number | boolean
  }
}

export const createLoguxSubscribe: ActionCreator<
  LoguxSubscribeAction,
  {
    channel: string
    filter?: LoguxSubscribeAction['filter']
    since?: LoguxSubscribeAction['since']
  }
>

export const createLoguxUnsubscribe: ActionCreator<
  LoguxSubscribeAction,
  {
    channel: string
    filter?: LoguxSubscribeAction['filter']
  }
>
