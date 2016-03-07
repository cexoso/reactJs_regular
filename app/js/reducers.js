import { combineReducers } from 'redux'
import { ADD_TODO} from './actions'
function test(state="",action){
  return state;
}
function test1(state=[],action){
  return state;
}
const todoApp = combineReducers({
  test,
  test1
})

export default todoApp
