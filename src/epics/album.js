import { of } from 'rxjs'
import { takeUntil, mergeMap, map, catchError } from 'rxjs/operators'

import {
  OPEN_MODAL_ALBUM,
  FETCH_SINGLE_ALBUM,
  CLEAR_SINGLE_ALBUM,
  fetchSingleAlbum,
  fetchSingleAlbumSuccess,
  fetchSingleAlbumFailure,
  clearSingleAlbum
} from "../actions/album"

export const openModalAlbumEpic = action$ => action$.ofType(OPEN_MODAL_ALBUM).pipe(
  map(action => typeof action.albumId !== 'undefined' && action.open !== false
    ? fetchSingleAlbum(action.albumId)
    : clearSingleAlbum()
  )
)

export const fetchSingleAlbumEpic = (action$, state$, { axios$ }) => {
  return action$
    .ofType(FETCH_SINGLE_ALBUM)
    .pipe(
      mergeMap(action => axios$(`/posts/${action.id}`).pipe(
        mergeMap(post => axios$(`/users/${post.data.userId}`).pipe(
          map(user => ({user: user.data, ...post.data})),
          mergeMap(post => axios$(`/comments?postId=${post.id}`).pipe(
            map(comments => fetchSingleAlbumSuccess({comments: comments.data, ...post})),
            takeUntil(action$.ofType(CLEAR_SINGLE_ALBUM)),
          ))
        ))
      )),
      catchError(error => {
        console.log(error)
        return of(fetchSingleAlbumFailure('Cannot get Post, please try again :)'))
      })
    )
}