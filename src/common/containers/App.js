import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter'

const mapState = ({ counter }) => ({ counter })

const mapDispatch = dispatch => bindActionCreators(CounterActions, dispatch)

export default connect(mapState, mapDispatch)(Counter)
