import { of } from 'rxjs'
import { delay, takeUntil, mergeMap, map, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import {
  FETCH_POST,
  FETCH_SINGLE_POST,
  CLEAR_SINGLE_POST,
  fetchPostSuccess,
  fetchPostFailure
} from "../actions/post";
import { fakeAjaxSinglePost } from './lib/fakeAjax'

const posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }
]

export const fetchPostEpic = action$ => {
  return action$
    .ofType(FETCH_POST)
    .pipe(
      delay(3000),
      map(action => fetchPostSuccess({ data: posts })),
      catchError(() => of(fetchPostFailure('Cannot fetch post')))
    )
}

export const fetchSinglePostEpic = action$ => {
  return action$.pipe(
    ofType(FETCH_SINGLE_POST),
    mergeMap(action => fakeAjaxSinglePost(`/post/${action.id}`).pipe(
      map(response => fetchPostSuccess({ single: response })),
      takeUntil(action$.pipe(
        ofType(CLEAR_SINGLE_POST)
      )),
      catchError(() => of(fetchPostFailure('Cannot fetch post')))
    ))
  )
}