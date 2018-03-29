/**
 *  Created by daiwenjuan on 2018/2/24 上午10:43.
 */
class mPromise {
  constructor(fn) {
    let _this = this
    this._queue = []

    this._succ_res = null
    this._error_res = null
    this.status = ''
    fn(function (...args) {
      _this._succ_res = args
      _this.status = 'succ'
      _this._queue.forEach(json => {
        json.fn1(...args)
      })
    }, function (...args) {
      _this._error_res = args
      _this.status = 'error'
      _this._queue.forEach(json => {
        json.fn2(...args)
      })
    })
  }

  then(fn1, fn2) {
    if (this.status === 'succ') {
      fn1(...this._succ_res)
    } else if (this.status === 'error') {
      fn2(...this._error_res)
    } else {
      this._queue.push({ fn1, fn2 })
    }
  }
}
mPromise.all = function (arr) {
  let arr = []
  return mPromise(function (resolve, reject) {
    let i = 0

    function next() {
      arr[i].then(function () {
        arr.push(res)
        i++
        if (i === arr.length) {
          resolve(arr)
        } else {
          next()
        }
      }, reject)
    }
  })
}

let p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(12)
  }, 500)
})
p.then(function (num) {
  alert(num)
}, function () {
  alert('错误')
})