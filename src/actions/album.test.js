import {
  FETCH_SINGLE_ALBUM,
  FETCH_SINGLE_ALBUM_SUCCESS,
  FETCH_SINGLE_ALBUM_FAILURE,
  fetchSingleAlbum,
  fetchSingleAlbumSuccess,
  fetchSingleAlbumFailure,
} from './album'

it('test fetchSingleAlbum action creators', () => {
  const id = 1
  const expectedAction = {
    type: FETCH_SINGLE_ALBUM,
    id
  }

  expect(fetchSingleAlbum(id)).toEqual(expectedAction)
})

it('test fetchSingleAlbumSuccess action creators', () => {
  const posts = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
  const expectedAction = {
    type: FETCH_SINGLE_ALBUM_SUCCESS,
    payload: posts
  }

  expect(fetchSingleAlbumSuccess(posts)).toEqual(expectedAction)
})

it('test fetchSingleAlbumFailure action creators', () => {
  const message = 'Error'
  const expectedAction = {
    type: FETCH_SINGLE_ALBUM_FAILURE,
    payload: message
  }

  expect(fetchSingleAlbumFailure(message)).toEqual(expectedAction)
})