/**
 *  Created by daiwenjuan on 2017/10/19 下午5:04.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import IndexPage from './index'
import './styles/app.less'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(IndexPage)

if (module.hot) {
  module.hot.accept('./index', () => {
    const NextRootContainer = require('./index').default
    render(NextRootContainer)
  })
}
