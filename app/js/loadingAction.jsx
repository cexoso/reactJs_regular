export const FINISH="FINISH";
export const LOADING="LOADING";

export const LOADING_CHANGE="LOADING_CHANGE";

export default function loadingChangeCreater(state,component){
  return {
    type:LOADING_CHANGE,
    state,
    component
  }
}
