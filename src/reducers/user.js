import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from '../actions/user'

export const initialState = {
  loading: false,
  data: [],
  error: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default userReducer