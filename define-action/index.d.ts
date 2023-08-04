import type { Action, AnyAction } from '@logux/core'

interface Fields {
  [key: string]: any
}

export interface AbstractActionCreator<CreatedAction extends Action = Action> {
  (...args: any): CreatedAction
  type: string
}

export interface ActionCreator<
  CreatedAction extends Action = AnyAction,
  CreatorArgs extends any[] = [Omit<CreatedAction, 'type'>]
> {
  match: (action: AnyAction) => action is CreatedAction
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
  <CreatedAction extends Action>(type: CreatedAction['type']): ActionCreator<
    CreatedAction,
    [Omit<CreatedAction, 'type'>]
  >

  <CreatedAction extends Action, CreatorArgs extends any[]>(
    type: CreatedAction['type'],
    creator?: (...args: CreatorArgs) => CreatedAction
  ): ActionCreator<CreatedAction, CreatorArgs>
}

export const defineAction: DefineAction
