export const FETCH_SINGLE_USER = 'FETCH_SINGLE_USER'
export const FETCH_SINGLE_USER_SUCCESS = 'FETCH_SINGLE_USER_SUCCESS'
export const FETCH_SINGLE_USER_FAILURE = 'FETCH_SINGLE_USER_FAILURE'
export const CLEAR_SINGLE_USER = 'CLEAR_SINGLE_USER'

export const fetchSingleUser = id => ({
  type: FETCH_SINGLE_USER,
  id
})

export const fetchSingleUserSuccess = payload => ({
  type: FETCH_SINGLE_USER_SUCCESS,
  payload
})

export const fetchSingleUserFailure = payload => ({
  type: FETCH_SINGLE_USER_FAILURE,
  payload
})

export const clearSingleUser = () => ({
  type: CLEAR_SINGLE_USER
})