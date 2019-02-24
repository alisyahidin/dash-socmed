import {
  FETCH_POST,
  FETCH_SINGLE_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from '../actions/post'
import postReducer, { initialState } from './post'

it('test initialState post reducer', () => {
  const expectedState = initialState
  expect(postReducer(undefined, {})).toEqual(expectedState)
})

it('test FETCH_POST action type', () => {
  const expectedState = { ...initialState, loading: true }
  expect(postReducer(undefined, { type: FETCH_POST })).toEqual(expectedState)
})

it('test FETCH_POST action type', () => {
  const expectedState = { ...initialState, loading: true }
  expect(postReducer(undefined, { type: FETCH_SINGLE_POST, id: 1 })).toEqual(expectedState)
})

it('test FETCH_POST_SUCCESS action type', () => {
  const posts = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
  ]
  const expectedState = { ...initialState, loading: false, data: posts }
  expect(postReducer(undefined, { type: FETCH_POST_SUCCESS, payload: { data: posts } })).toEqual(expectedState)
})

it('test FETCH_POST_FAILURE action type', () => {
  const message = 'Error'
  const expectedState = { ...initialState, loading: false, error: message }
  expect(postReducer(undefined, { type: FETCH_POST_FAILURE, payload: message })).toEqual(expectedState)
})