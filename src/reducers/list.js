/*export default function list(reducer) {
  return function (state = [], action) {
    const {
      index,
      action: innerAction
    } = action;

    switch (action.type) {
    case 'ADD_TO_LIST':
      return [
        ...state,
        reducer(undefined, action)
      ];
    case 'REMOVE_FROM_LIST':
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    case 'PERFORM_IN_LIST':
      return [
        ...state.slice(0, index),
        reducer(state[index], innerAction),
        ...state.slice(index + 1)
      ];
    default:
      return state;
    }
  }
}*/

export default function list(state = [], action) {
    const {
      index
    } = action;

    switch (action.type) {
    case 'ADD_TO_LIST':
      return [
        ...state,
        0
      ];
    case 'REMOVE_FROM_LIST':
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    case 'ADD_IN_LIST':
      return [
        ...state.slice(0, index),
        state[index]+1,
        ...state.slice(index + 1)
      ];
      case 'SUB_IN_LIST':
      return [
        ...state.slice(0, index),
        state[index]-1,
        ...state.slice(index + 1)
      ];
    default:
      return state;
    }
  }
