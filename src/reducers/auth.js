import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/auth'
import storage from '../lib/storage'

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
      storage.remove('user')
      return {
        ...state,
        loading: false,
        user: null,
        error: null
      }
    default:
      return state
  }
}

export default authReducer