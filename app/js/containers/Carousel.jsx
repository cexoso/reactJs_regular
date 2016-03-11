import {connect} from 'react-redux';
import Carousel from '../components/Carousel';
import {change} from '../actions/carouselAction';
function mapStateToProps(state) {
  console.log(`Carousel map ${JSON.stringify(state)}`)
  
  return {arr};
}
function mapDispatchToProps(dispatch) {
  return {
    next: function() {
      dispatch(change("next"))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
