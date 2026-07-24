import type { ActionCreator } from '../define-action/index.js'

/**
 * Structural type of a CRDT table returned by `@logux/client`’s
 * `createCrdtDatabase().table()`.
 *
 * Only the parts needed to extract column types are described here, so
 * `@logux/actions` stays free of a `@logux/client` dependency (which would
 * be circular, since `@logux/client` depends on `@logux/actions`). Any real
 * table is structurally assignable to it, and `CreateFields`/`RowFields`
 * are inferred from the table’s own methods.
 */
export interface CrdtTable<
  CreateFields extends object = object,
  RowFields extends object = object
> {
  create(fields: { id?: string } & CreateFields): Promise<string>
  readonly plural: string
  update(id: string, diff: Partial<RowFields>): Promise<void>
}

/**
 * `plural/created` action. `fields` are the table columns accepted by
 * `table.create()` (columns with `default` or wrapped in `optional()`
 * can be omitted).
 */
export interface CrdtTableCreatedAction<Fields extends object = object> {
  fields: Fields
  id: string
  type: string
}

/**
 * `plural/changed` action. `fields` are a partial set of the table columns
 * (same shape as the `table.update()` diff).
 */
export interface CrdtTableChangedAction<Fields extends object = object> {
  fields: Partial<Fields>
  id: string
  type: string
}

/**
 * `plural/deleted` action.
 */
export interface CrdtTableDeletedAction {
  id: string
  type: string
}

/**
 * Define `plural/created` action creator from a CRDT table.
 * Column types are extracted from the table.
 *
 * ```js
 * import { defineCreatedCrdtTable } from '@logux/actions'
 *
 * let user = crdt.table('user', { name: string(), age: optional(number()) })
 * let createdUser = defineCreatedCrdtTable(user)
 * ```
 */
export function defineCreatedCrdtTable<
  CreateFields extends object,
  RowFields extends object
>(
  table: CrdtTable<CreateFields, RowFields>
): ActionCreator<CrdtTableCreatedAction<CreateFields>>

/**
 * Define `plural/changed` action creator from a CRDT table.
 * Column types are extracted from the table.
 */
export function defineChangedCrdtTable<
  CreateFields extends object,
  RowFields extends object
>(
  table: CrdtTable<CreateFields, RowFields>
): ActionCreator<CrdtTableChangedAction<RowFields>>

/**
 * Define `plural/deleted` action creator from a CRDT table.
 */
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
 * let user = crdt.table('user', { name: string(), age: optional(number()) })
 *
 * let [
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
