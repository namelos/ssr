import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { increment, decrement, incrementIfOdd, incrementAsync } from '../modules/counter'

const mapState = ({ counter }) => ({ counter })

const mapDispatch = dispatch => bindActionCreators(
  { increment, decrement, incrementIfOdd, incrementAsync }, dispatch)

export default connect(mapState, mapDispatch)(Counter)