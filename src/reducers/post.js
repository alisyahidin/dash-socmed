import {
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from '../actions/post'

export const initialState = {
  loading: false,
  data: [],
  error: null
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        loading: true
      }
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        data: action.payload,
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