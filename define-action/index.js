export function defineAction (type) {
  let creator = fields => {
    return { type, ...fields }
  }
  creator.type = type
  creator.match = action => action.type === type
  return creator
}
