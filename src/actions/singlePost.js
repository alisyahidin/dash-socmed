export const OPEN_MODAL = 'OPEN_MODAL'
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST'
export const FETCH_SINGLE_POST_SUCCESS = 'FETCH_SINGLE_POST_SUCCESS'
export const FETCH_SINGLE_POST_FAILURE = 'FETCH_SINGLE_POST_FAILURE'
export const CLEAR_SINGLE_POST = 'CLEAR_SINGLE_POST'

export const openModal = (open, postId) => ({
  type: OPEN_MODAL,
  postId,
  open,
})

export const fetchSinglePost = id => ({
  type: FETCH_SINGLE_POST,
  id
})

export const fetchSinglePostSuccess = payload => ({
  type: FETCH_SINGLE_POST_SUCCESS,
  payload
})

export const fetchSinglePostFailure = payload => ({
  type: FETCH_SINGLE_POST_FAILURE,
  payload
})

export const clearSinglePost = () => ({
  type: CLEAR_SINGLE_POST
})