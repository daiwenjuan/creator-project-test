/**
 *  Created by daiwenjuan on 2018/1/11 下午12:08.
 */
import Plugin from '../../frame/Plugin'
import createComponent from '../../frame/EnhanceComponent'
import key from './key'
import Demo01 from 'bundle-loader?lazy!./demo01'

const plugin = new Plugin(key.ID)
plugin.reducer = require('./demo01.reducer.js')

plugin.router = {
  path: '/',
  exact: true,
  component: createComponent(Demo01)
}
plugin.registerService('@demo01:getdata', function (data) {
  return data
})
module.exports = plugin