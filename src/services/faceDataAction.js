import axios from 'axios';
import { GET_TODOS_FAILD, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from './constats';

export const fachData = () => async (dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch({ type: GET_TODOS_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: GET_TODOS_FAILD, payload: error.message });
  }

}