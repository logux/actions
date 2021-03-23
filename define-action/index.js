export function defineAction(type, creator) {
  if (!creator) {
    creator = fields => {
      return { type, ...fields }
    }
  }
  creator.type = type
  creator.match = action => action.type === type
  return creator
}
