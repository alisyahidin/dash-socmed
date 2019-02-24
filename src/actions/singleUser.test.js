import {
  FETCH_SINGLE_USER,
  FETCH_SINGLE_USER_SUCCESS,
  FETCH_SINGLE_USER_FAILURE,
  CLEAR_SINGLE_USER,
  fetchSingleUser,
  fetchSingleUserSuccess,
  fetchSingleUserFailure,
  clearSingleUser,
} from './singleUser'

it('test fetchSingleUser action creators', () => {
  expect(fetchSingleUser()).toEqual({type: FETCH_SINGLE_USER})
})

it('test fetchSingleUserSuccess action creators', () => {
  const user = { id: 1, name: 'Ali' }
  const expectedAction = {
    type: FETCH_SINGLE_USER_SUCCESS,
    payload: user
  }

  expect(fetchSingleUserSuccess(user)).toEqual(expectedAction)
})

it('test fetchSingleUserFailure action creators', () => {
  const message = 'Error'
  const expectedAction = {
    type: FETCH_SINGLE_USER_FAILURE,
    payload: message
  }

  expect(fetchSingleUserFailure(message)).toEqual(expectedAction)
})