function _(state = {}, action) {  
  switch (action.type) {
    case "___":
    return Object.assign({},state,{date:new Date().getYear()});
    default: return state;
  }
}
export default _;
