import {
  FETCH_SINGLE_ALBUM,
  FETCH_SINGLE_ALBUM_SUCCESS,
  FETCH_SINGLE_ALBUM_FAILURE,
  CLEAR_SINGLE_ALBUM,
} from '../actions/album'
import albumReducer, { initialState } from './album'

it('test initialState post reducer', () => {
  const expectedState = initialState
  expect(albumReducer(undefined, {})).toEqual(expectedState)
})

it('test FETCH_SINGLE_ALBUM action type', () => {
  const expectedState = { ...initialState, loading: true }
  expect(albumReducer(undefined, { type: FETCH_SINGLE_ALBUM, id: 1 })).toEqual(expectedState)
})

it('test FETCH_SINGLE_ALBUM_SUCCESS action type', () => {
  const post = {
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim"
  }
  const expectedState = { ...initialState, loading: false, data: post }
  expect(albumReducer(undefined, { type: FETCH_SINGLE_ALBUM_SUCCESS, payload: post })).toEqual(expectedState)
})

it('test FETCH_SINGLE_ALBUM_FAILURE action type', () => {
  const message = 'Error'
  const expectedState = { ...initialState, loading: false, error: message }
  expect(albumReducer(undefined, { type: FETCH_SINGLE_ALBUM_FAILURE, payload: message })).toEqual(expectedState)
})