// function _(state = {}, action) {
//   console.log(`carouselReduce ${action.type}`)
//   switch (action.type) {
//     case "CAROUSEL_CHANGE":
//     return {w:new Date()};
//     case "___":
//     return {a:123};
//       break;
//     default: return state;
//   }
// }
// export default _;
function CAROUSEL_CHANGE_HANDLE(state, s) {
  switch (s) {
    case "next":
      return {
        current: state.current + 1
      }
    default:
      return state;
  }
}

function _(state = {
  current: 0
}, action) {
  switch (action.type) {
    case "CAROUSEL_CHANGE":
      return CAROUSEL_CHANGE_HANDLE(state, action.action);
    default:
      return state;
  }
}
export default _;
