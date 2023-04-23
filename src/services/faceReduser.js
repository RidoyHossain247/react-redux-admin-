import { GET_TODOS_FAILD, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./constats";

const ini = {
  isLoding: false,
  faceTodos: [],
  error: null
}
const faceTodosReducer = (state = ini, action) => {

  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoding: true
      }
    case GET_TODOS_SUCCESS:
      return {
        isLoding: false,
        faceTodos: action.payload,
        error: null
      };
    case GET_TODOS_FAILD:
      return {
        isLoding: false,
        faceTodos: [],
        error: error.action
      };

    default:
      state;
  }

}
export default faceTodosReducer