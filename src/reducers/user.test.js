import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from '../actions/user'
import userReducer, { initialState } from './user'

it('test initialState user reducer', () => {
  const expectedState = initialState
  expect(userReducer(undefined, {})).toEqual(expectedState)
})

it('test FETCH_USER action type', () => {
  const expectedState = { ...initialState, loading: true }
  expect(userReducer(undefined, { type: FETCH_USER })).toEqual(expectedState)
})

it('test FETCH_USER_SUCCESS action type', () => {
  const users = [{ id: 1, name: 'Ali' }]
  const expectedState = { ...initialState, loading: false, data: users }
  expect(userReducer(undefined, { type: FETCH_USER_SUCCESS, payload: users })).toEqual(expectedState)
})

it('test FETCH_USER_FAILURE action type', () => {
  const message = 'Error'
  const expectedState = { ...initialState, loading: false, error: message }
  expect(userReducer(undefined, { type: FETCH_USER_FAILURE, payload: message })).toEqual(expectedState)
})