/**
 *  Created by daiwenjuan on 2018/2/8 下午12:00.
 */
import styles from './EnhanceModal.module.less'
import React, { Component, PropTypes } from 'react'
import Protal from './Protal'
import { Button } from 'antd'
const SVG_DELETE = require('images/delete.svg')

// export default class Modal extends Component {
//   constructor(props) {
//     super(props)
//   }
//
//   render() {
//     return <div>
//       <Protal>
//         <div style={{ height: 50, width: 50 }}>{'Modal'}</div>
//       </Protal>
//     </div>
//   }
// }
// export default function (parmas) {
//   return function EnhanceModal(WrappedComponent) {
//     return class HOC extends Component {
//       render() {
//         return <div>
//           <Protal>
//             <div style={{ height: 50, width: 50 }}>
//               <WrappedComponent/>
//             </div>
//           </Protal>
//         </div>
//       }
//     }
//   }
// }

const EnhanceModal = (params) => (WrappedComponent) => class extends Component {
  constructor(...props) {
    super(...props)
  }

  render() {
    let { title, footer = [], cancleText, okText } = params
    return (
      <Protal>
        <div className={styles['enhance-modal-wrapper']}>
          <div className="modal-content">
            <div className="header">
              <div className="title">{title ? title : '标题'}</div>
              <div className="delete">
                <img src={SVG_DELETE}/>
              </div>
            </div>
            <div className='content'>
              <WrappedComponent {...this.props}/>
            </div>
            <div className="footer">
              <div className="footer-left"/>
              <div className="footer-right">
                {footer.length > 0 ? footer.map(item => {
                  return <Button>{item}</Button>
                }) : <div>
                  <Button className='btn mr_10'>{cancleText ? cancleText : '取消'}</Button>
                  <Button className='btn btn-ok'>{okText ? okText : '确定'}</Button>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </Protal>
    )
  }
}
module.exports = EnhanceModal
