import { defineAction } from '../define-action/index.js'

export function defineCreatedSyncMap (plural) {
  return defineAction(`${plural}/created`)
}

export function defineCreateSyncMap (plural) {
  return defineAction(`${plural}/create`)
}

export function defineChangedSyncMap (plural) {
  return defineAction(`${plural}/changed`)
}

export function defineChangeSyncMap (plural) {
  return defineAction(`${plural}/change`)
}

export function defineDeletedSyncMap (plural) {
  return defineAction(`${plural}/deleted`)
}

export function defineDeleteSyncMap (plural) {
  return defineAction(`${plural}/delete`)
}
