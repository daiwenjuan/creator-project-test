/**
 *  Created by daiwenjuan on 2017/10/12 下午5:05.
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const EnhanceConnect = (mapStateToProps, actions) => (Component) => {
  const mapDispatchToProps = dispatch => bindActionCreators({...actions}, dispatch)
  return connect(mapStateToProps, mapDispatchToProps)(Component)
}
export default EnhanceConnect