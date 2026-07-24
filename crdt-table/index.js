import { defineAction } from '../define-action/index.js'

export function defineCreatedCrdtTable(table) {
  return defineAction(`${table.plural}/created`)
}

export function defineChangedCrdtTable(table) {
  return defineAction(`${table.plural}/changed`)
}

export function defineDeletedCrdtTable(table) {
  return defineAction(`${table.plural}/deleted`)
}

export function defineCrdtTableActions(table) {
  return [
    defineCreatedCrdtTable(table),
    defineChangedCrdtTable(table),
    defineDeletedCrdtTable(table)
  ]
}
