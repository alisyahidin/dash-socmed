import {
  FETCH_SINGLE_USER,
  FETCH_SINGLE_USER_SUCCESS,
  FETCH_SINGLE_USER_FAILURE,
  CLEAR_SINGLE_USER,
} from '../actions/singleUser'
import singleUserReducer, { initialState } from './singleUser'

it('test initialState singleUser reducer', () => {
  const expectedState = initialState
  expect(singleUserReducer(undefined, {})).toEqual(expectedState)
})

it('test FETCH_SINGLE_USER action type', () => {
  const expectedState = { ...initialState, loading: true }
  expect(singleUserReducer(undefined, { type: FETCH_SINGLE_USER, id: 1 })).toEqual(expectedState)
})

it('test FETCH_SINGLE_USER_SUCCESS action type', () => {
  const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  const expectedState = { ...initialState, loading: false, data: user }
  expect(singleUserReducer(undefined, { type: FETCH_SINGLE_USER_SUCCESS, payload: user })).toEqual(expectedState)
})

it('test FETCH_SINGLE_USER_FAILURE action type', () => {
  const message = 'Error'
  const expectedState = { ...initialState, loading: false, error: message }
  expect(singleUserReducer(undefined, { type: FETCH_SINGLE_USER_FAILURE, payload: message })).toEqual(expectedState)
})