// import {CAROUSEL_CHANGE} from "actions/carouselAction";
function _(state = {}, action) {
  switch (action.type) {
    case "___":
    return Object.assign({},state,{date:new Date().getTime()});
    default: return state;
  }
}
export default _;