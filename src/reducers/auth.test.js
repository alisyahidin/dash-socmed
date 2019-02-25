import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CHECK_AUTHENTICATED_USER
} from '../actions/auth'
import authReducer, { initialState } from './auth'

it('test initialState user reducer', () => {
  const expectedState = initialState
  expect(authReducer(undefined, {})).toEqual(expectedState)
})

it('test LOGIN action type', () => {
  const expectedState = { ...initialState, loading: true }
  expect(authReducer(undefined, { type: LOGIN })).toEqual(expectedState)
})

it('test LOGIN_SUCCESS action type', () => {
  const user = { id: 1, name: 'Ali', username: 'ali' }
  const expectedState = { ...initialState, loading: false, user }
  expect(authReducer(undefined, { type: LOGIN_SUCCESS, payload: user })).toEqual(expectedState)
})

it('test LOGIN_FAILURE action type', () => {
  const message = 'Error'
  const expectedState = { ...initialState, loading: false, error: message }
  expect(authReducer(undefined, { type: LOGIN_FAILURE, payload: message })).toEqual(expectedState)
})

it('test LOGOUT action type', () => {
  const expectedState = initialState
  expect(authReducer(undefined, { type: LOGOUT })).toEqual(expectedState)
})