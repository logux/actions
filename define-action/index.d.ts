import { Action, AnyAction } from '@logux/core'

interface Fields {
  [key: string]: any
}

export interface AbstractActionCreator {
  (...args: any): Action
  type: string
}

export interface ActionCreator<
  CreatedAction extends Action,
  CreatorArgs extends any[] = [Omit<CreatedAction, 'type'>]
> {
  type: string
  match: (action: AnyAction) => action is CreatedAction
  (...args: CreatorArgs): CreatedAction
}

interface DefineAction {
  <CreatedAction extends Action>(type: string): ActionCreator<
    CreatedAction,
    [Omit<CreatedAction, 'type'>]
  >

  <CreatedAction extends Action, CreatorArgs extends any[]>(
    type: string,
    creator: (...args: CreatorArgs) => CreatedAction
  ): ActionCreator<CreatedAction, CreatorArgs>
}

export const defineAction: DefineAction
