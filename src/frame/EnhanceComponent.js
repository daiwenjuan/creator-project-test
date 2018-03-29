/**
 *  Created by daiwenjuan on 2017/10/24 下午7:09.
 */
import React from 'react'
import Bundle from './bundle'

export default component => props => (
  <Bundle load={component}>
    {Component => <Component {...props} />}
  </Bundle>
)
