export const FETCH_POST = 'FETCH_POST'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE'

export const fetchPost = () => ({
  type: FETCH_POST
})

export const fetchPostSuccess = payload => ({
  type: FETCH_POST_SUCCESS,
  payload
})

export const fetchPostFailure = payload => ({
  type: FETCH_POST_FAILURE,
  payload
})