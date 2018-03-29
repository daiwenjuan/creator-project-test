/**
 *  Created by daiwenjuan on 2018/2/9 下午2:26.
 */
import styles from './protal.module.less'
import React from 'react'
import { unmountComponentAtNode, unstable_renderSubtreeIntoContainer } from 'react-dom'
class Protal extends React.Component {

  renderProtal() {
    unstable_renderSubtreeIntoContainer(this,
      <div className={styles['dialog']}>
        {this.props.children}
      </div>, this.node)
  }

  componentDidMount() {
    const doc = window.document
    this.node = document.createElement('div')
    doc.body.appendChild(this.node)
    this.renderProtal()
  }

  componentDidUpdate() {
    this.renderProtal()
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.container)
    window.document.body.removeChild(this.node)
  }

  render() {
    return null
  }
}
module.exports = Protal