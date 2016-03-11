import { combineReducers } from 'redux';
import index from "./indexReduce/index";
import exquisite from "./exquisiteReduce/index";

const _ = combineReducers({
  index,
  exquisite
});
export default _;
