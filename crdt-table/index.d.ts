import type { ActionCreator } from '../define-action/index.js'

export interface CrdtTable<
  CreateFields extends object = object,
  RowFields extends object = object
> {
  create(fields: { id?: string } & CreateFields): Promise<string>
  readonly plural: string
  update(id: string, diff: Partial<RowFields>): Promise<void>
}

export type CrdtTableCreatedAction<Fields extends object = object> =
  | {
      fields: Fields
      id: string
      type: string
    }
  | { records: (Fields & { id: string })[]; type: string }

export type CrdtTableChangedAction<Fields extends object = object> =
  | {
      fields: Partial<Fields>
      id: string
      type: string
    }
  | {
      fields: Partial<Fields>
      ids: string[]
      type: string
    }

export type CrdtTableDeletedAction =
  | {
      id: string
      type: string
    }
  | {
      ids: string[]
      type: string
    }

export function defineCreatedCrdtTable<
  CreateFields extends object,
  RowFields extends object
>(
  table: CrdtTable<CreateFields, RowFields>
): ActionCreator<CrdtTableCreatedAction<CreateFields>>

export function defineChangedCrdtTable<
  CreateFields extends object,
  RowFields extends object
>(
  table: CrdtTable<CreateFields, RowFields>
): ActionCreator<CrdtTableChangedAction<RowFields>>

export function defineDeletedCrdtTable(
  table: CrdtTable
): ActionCreator<CrdtTableDeletedAction>

/**
 * Returns created/changed/deleted action creators for a CRDT table.
 * Column types are extracted from the table and put into the
 * action `fields` types.
 *
 * ```js
 * import { defineCrdtTableActions } from '@logux/actions'
 *
 * const user = crdt.table('user', { name: string(), age: optional(number()) })
 *
 * const [
 *   createdUserAction,
 *   changedUserAction,
 *   deletedUserAction
 * ] = defineCrdtTableActions(user)
 * ```
 */
export function defineCrdtTableActions<
  CreateFields extends object,
  RowFields extends object
>(
  table: CrdtTable<CreateFields, RowFields>
): [
  ActionCreator<CrdtTableCreatedAction<CreateFields>>,
  ActionCreator<CrdtTableChangedAction<RowFields>>,
  ActionCreator<CrdtTableDeletedAction>
]
