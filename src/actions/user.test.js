import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  fetchUser,
  fetchUserSuccess,
  fetchUserFailure,
} from './user'

it('test fetchUser action creators', () => {
  expect(fetchUser()).toEqual({type: FETCH_USER})
})

it('test fetchUserSuccess action creators', () => {
  const users = [{ id: 1, name: 'Ali' }]
  const expectedAction = {
    type: FETCH_USER_SUCCESS,
    payload: users
  }

  expect(fetchUserSuccess(users)).toEqual(expectedAction)
})

it('test fetchUserFailure action creators', () => {
  const message = 'Error'
  const expectedAction = {
    type: FETCH_USER_FAILURE,
    payload: message
  }

  expect(fetchUserFailure(message)).toEqual(expectedAction)
})