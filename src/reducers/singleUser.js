import {
  FETCH_SINGLE_USER,
  FETCH_SINGLE_USER_SUCCESS,
  FETCH_SINGLE_USER_FAILURE,
  CLEAR_SINGLE_USER,
} from '../actions/singleUser'

export const initialState = {
  loading: false,
  data: null,
  error: null
}

const singleUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_USER:
      return {
        ...state,
        loading: true,
        error: null
      }
    case CLEAR_SINGLE_USER:
      return {
        ...state,
        loading: false,
        data: null
      }
    case FETCH_SINGLE_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case FETCH_SINGLE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default singleUserReducer