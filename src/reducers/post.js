import {
  FETCH_POST,
  FETCH_SINGLE_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  CLEAR_SINGLE_POST,
} from '../actions/post'

export const initialState = {
  loading: false,
  data: [],
  single: null,
  error: null
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST:
    case FETCH_SINGLE_POST:
      return {
        ...state,
        loading: true
      }
    case CLEAR_SINGLE_POST:
      return {
        ...state,
        single: null
      }
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      }
    case FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default postReducer