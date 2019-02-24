import {
  FETCH_SINGLE_POST,
  FETCH_SINGLE_POST_SUCCESS,
  FETCH_SINGLE_POST_FAILURE,
  CLEAR_SINGLE_POST,
} from '../actions/singlePost'
import singlePostReducer, { initialState } from './singlePost'

it('test initialState post reducer', () => {
  const expectedState = initialState
  expect(singlePostReducer(undefined, {})).toEqual(expectedState)
})

it('test FETCH_SINGLE_POST action type', () => {
  const expectedState = { ...initialState, loading: true }
  expect(singlePostReducer(undefined, { type: FETCH_SINGLE_POST, id: 1 })).toEqual(expectedState)
})

it('test FETCH_SINGLE_POST_SUCCESS action type', () => {
  const post = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
  const expectedState = { ...initialState, loading: false, data: post }
  expect(singlePostReducer(undefined, { type: FETCH_SINGLE_POST_SUCCESS, payload: post })).toEqual(expectedState)
})

it('test FETCH_SINGLE_POST_FAILURE action type', () => {
  const message = 'Error'
  const expectedState = { ...initialState, loading: false, error: message }
  expect(singlePostReducer(undefined, { type: FETCH_SINGLE_POST_FAILURE, payload: message })).toEqual(expectedState)
})