import {
  OPEN_MODAL,
  FETCH_SINGLE_POST,
  FETCH_SINGLE_POST_SUCCESS,
  FETCH_SINGLE_POST_FAILURE,
  CLEAR_SINGLE_POST,
} from '../actions/singlePost'

export const initialState = {
  open: false,
  loading: false,
  data: null,
  error: null
}

const singlePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        open: action.open
      }
    case FETCH_SINGLE_POST:
      return {
        ...state,
        loading: true
      }
    case CLEAR_SINGLE_POST:
      return {
        ...state,
        loading: false,
        data: null
      }
    case FETCH_SINGLE_POST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case FETCH_SINGLE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default singlePostReducer