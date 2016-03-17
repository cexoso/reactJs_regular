import {combineReducers} from 'redux';
import index from './pages/index/reduce.jsx';
import app1 from './pages/app1/reduce.jsx';
import {FINISH, LOADING, LOADING_CHANGE} from './loadingAction.jsx'
function loading(state = {state:LOADING}, action) {
    switch (action.type) {
        case LOADING_CHANGE:
            return {state: action.state, component: action.component};
        default:
            return state;
    }
}
let _ = combineReducers({
    loading,
    pages: {
        index,
        app1
    }
});
export default _;
