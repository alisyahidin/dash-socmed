import {
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  fetchPost,
  fetchPostSuccess,
  fetchPostFailure,
} from './post'

it('test fetchPost action creators', () => {
  expect(fetchPost()).toEqual({type: FETCH_POST})
})

it('test fetchPostSuccess action creators', () => {
  const posts = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
  ]
  const expectedAction = {
    type: FETCH_POST_SUCCESS,
    payload: posts
  }

  expect(fetchPostSuccess(posts)).toEqual(expectedAction)
})

it('test fetchPostFailure action creators', () => {
  const message = 'Error'
  const expectedAction = {
    type: FETCH_POST_FAILURE,
    payload: message
  }

  expect(fetchPostFailure(message)).toEqual(expectedAction)
})