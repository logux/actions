import { defineAction } from '../define-action/index.js'

export const createLoguxSubscribe = defineAction('logux/subscribe')

export const createLoguxSubscribed = defineAction('logux/subscribed')

export const createLoguxUnsubscribe = defineAction('logux/unsubscribe')
