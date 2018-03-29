/**
 *  Created by daiwenjuan on 2018/2/5 下午4:06.
 */
class Message {
  constructor() {
    this.events = {}
  }

  on(key, fn) {
    this.events[key] = fn
  }

  emit(key, ...args) {
    this.events[key].apply(this, args)
  }
}

module.exports = Message