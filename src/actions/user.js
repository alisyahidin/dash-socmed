export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

export const fetchUser = () => ({
  type: FETCH_USER
})

export const fetchUserSuccess = payload => ({
  type: FETCH_USER_SUCCESS,
  payload
})

export const fetchUserFailure = payload => ({
  type: FETCH_USER_FAILURE,
  payload: payload
})