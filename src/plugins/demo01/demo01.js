/**
 *  Created by daiwenjuan on 2018/1/11 下午12:09.
 */
import styles from './demo01.module.less'
import React, { Component } from 'react'
import api from '../../frame/api'

export default class DEMO01 extends Component {

  constructor(props) {
    super(props)
  }

  handleGoBack() {
    let { history } = this.props
    history.goBack()
  }

  handleGetDataFromHome() {
    api.invoiceService('@home').then(result => {
      console.log(result)
    })
  }

  render() {
    return (
      <div className={styles['wrapper']}>
        <div style={{ marginTop: 10, marginLeft: 50 }}>模块一</div>
        <div style={{ marginTop: 20, marginLeft: 50 }} onClick={::this.handleGoBack}>返回HOME页</div>
        <div style={{ marginTop: 20, marginLeft: 50 }} onClick={::this.handleGetDataFromHome}>获取Home模块数据</div>
      </div>
    )
  }
}