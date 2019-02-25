import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CHECK_AUTHENTICATED_USER,
} from '../actions/auth'

export const initialState = {
  loading: false,
  user: null,
  error: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        user: null,
        error: null
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        loading: false,
        user: null,
        error: null
      }
    case CHECK_AUTHENTICATED_USER:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default authReducer