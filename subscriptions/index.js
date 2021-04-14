import { defineAction } from '../define-action/index.js'

export const loguxSubscribe = defineAction('logux/subscribe')

export const loguxSubscribed = defineAction('logux/subscribed')

export const loguxUnsubscribe = defineAction('logux/unsubscribe')
