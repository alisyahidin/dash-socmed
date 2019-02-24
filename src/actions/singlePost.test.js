import {
  FETCH_SINGLE_POST,
  FETCH_SINGLE_POST_SUCCESS,
  FETCH_SINGLE_POST_FAILURE,
  fetchSinglePost,
  fetchSinglePostSuccess,
  fetchSinglePostFailure,
} from './singlePost'

it('test fetchSinglePost action creators', () => {
  const id = 1
  const expectedAction = {
    type: FETCH_SINGLE_POST,
    id
  }

  expect(fetchSinglePost(id)).toEqual(expectedAction)
})

it('test fetchSinglePostSuccess action creators', () => {
  const posts = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
  const expectedAction = {
    type: FETCH_SINGLE_POST_SUCCESS,
    payload: posts
  }

  expect(fetchSinglePostSuccess(posts)).toEqual(expectedAction)
})

it('test fetchSinglePostFailure action creators', () => {
  const message = 'Error'
  const expectedAction = {
    type: FETCH_SINGLE_POST_FAILURE,
    payload: message
  }

  expect(fetchSinglePostFailure(message)).toEqual(expectedAction)
})