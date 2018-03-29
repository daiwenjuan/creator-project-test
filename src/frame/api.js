/**
 *  Created by daiwenjuan on 2017/12/21 下午5:58.
 */
class API {
  constructor() {
    this.ctx = {}
  }

  initialize(ctx) {
    this.ctx = ctx
  }

  getContext() {
    return this.ctx
  }

  dispatch(action) {
    return this.ctx.getStore().dispatch(action)
  }

  mPromise() {
    let promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
    return { promise, resolve: this.resolve, reject: this.reject }
  }

  invoiceService(key, ...args) {
    let plugins = this.ctx.getPlugins()
    let { promise, resolve } = this.mPromise()
    plugins.forEach(plugin => {
      let serviceManager = plugin.getServiceManager()
      if (serviceManager && serviceManager[key]) {
        let result = serviceManager[key].apply(this, args)
        resolve(result)
      }
    })
    return promise
  }
}

const api = new API()

export default api