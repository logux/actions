import { defineAction } from '../define-action/index.js'

export function defineCreatedSyncMap (Builder) {
  return defineAction(`${Builder.plural}/created`)
}

export function defineCreateSyncMap (Builder) {
  return defineAction(`${Builder.plural}/create`)
}

export function defineChangedSyncMap (Builder) {
  return defineAction(`${Builder.plural}/changed`)
}

export function defineChangeSyncMap (Builder) {
  return defineAction(`${Builder.plural}/change`)
}

export function defineDeletedSyncMap (Builder) {
  return defineAction(`${Builder.plural}/deleted`)
}

export function defineDeleteSyncMap (Builder) {
  return defineAction(`${Builder.plural}/delete`)
}
