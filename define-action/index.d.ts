import type { Action, AnyAction } from '@logux/core'

interface Fields {
  [key: string]: unknown
}

/**
 * `Omit` which is applied to each member of the union separately.
 * It is necessary for actions with different shapes, like batch actions.
 */
type OmitFromUnion<Type, Keys extends keyof any> = Type extends unknown
  ? Omit<Type, Keys>
  : never

export interface AbstractActionCreator<CreatedAction extends Action = Action> {
  (...args: any[]): CreatedAction
  type: string
}

export interface ActionCreator<
  CreatedAction extends Action = AnyAction,
  CreatorArgs extends unknown[] = [OmitFromUnion<CreatedAction, 'type'>]
> {
  match: (action: Action) => action is CreatedAction
  type: string
  (...args: CreatorArgs): CreatedAction
}

/**
 * Define action creator.
 *
 * ```js
 * import { defineAction } from '@logux/actions'
 *
 * export const renameAction = defineAction('rename')
 *
 * renameAction({ newName: 'New' }) //=> { type: 'rename', nameName: 'New' }
 * renameAction.type //=> 'rename'
 * renameAction.match(action) //=> boolean
 * ```
 *
 * @param type Action’s type.
 * @param creator Function to convert arguments to action object.
 * @returns Function which return an action.
 */
interface DefineAction {
  <CreatedAction extends Action>(
    type: CreatedAction['type']
  ): ActionCreator<CreatedAction, [OmitFromUnion<CreatedAction, 'type'>]>

  <CreatedAction extends Action, CreatorArgs extends unknown[]>(
    type: CreatedAction['type'],
    creator?: (...args: CreatorArgs) => CreatedAction
  ): ActionCreator<CreatedAction, CreatorArgs>
}

export const defineAction: DefineAction

export type PackedAction<ReducedAction extends Pick<Action, 'type'>> = {
  blob: Uint8Array
  action: ReducedAction
}

/**
 * Packer of actions with binary parts to binary format to use it
 * in custom packers in SQL-based log stores.
 */
export interface ActionPacker<
  FullAction extends Action = AnyAction,
  ReducedAction extends Pick<FullAction, 'type'> = Pick<FullAction, 'type'>
> {
  pack(action: FullAction): PackedAction<ReducedAction> | undefined
  unpack(action: PackedAction<ReducedAction>): FullAction
}
