export default class Reducer {

  constructor(id, initDefault) {
    this._id = id
    this._initDefault = initDefault || {}
    this._reducersMap = {}
    this._reducers = []
  }

  get Id() {
    return this._id
  }

  get exports() {
    return (state = this._initDefault, action) => {
      let { type } = action
      if (!!this._reducersMap[type]) {
        let handle = this._reducersMap[type]
        return handle(state, action)
      }
      return state
    }
  }

  handleAction(actionkey, fnAction) {
    this._reducersMap[actionkey] = fnAction
    this._reducers.push(fnAction)
  }
}