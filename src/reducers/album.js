import {
  OPEN_MODAL_ALBUM,
  FETCH_SINGLE_ALBUM,
  FETCH_SINGLE_ALBUM_SUCCESS,
  FETCH_SINGLE_ALBUM_FAILURE,
  CLEAR_SINGLE_ALBUM,
} from '../actions/album'

export const initialState = {
  open: false,
  loading: false,
  data: null,
  error: null
}

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_ALBUM:
      return {
        ...state,
        open: action.open,
      }
    case FETCH_SINGLE_ALBUM:
      return {
        ...state,
        loading: true,
        error: null
      }
    case CLEAR_SINGLE_ALBUM:
      return {
        ...state,
        loading: true,
        data: null
      }
    case FETCH_SINGLE_ALBUM_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case FETCH_SINGLE_ALBUM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default albumReducer