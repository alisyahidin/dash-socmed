import { of } from 'rxjs'
import { takeUntil, mergeMap, map, catchError } from 'rxjs/operators'

import {
  OPEN_MODAL,
  FETCH_SINGLE_POST,
  CLEAR_SINGLE_POST,
  fetchSinglePost,
  fetchSinglePostSuccess,
  fetchSinglePostFailure,
  clearSinglePost
} from "../actions/singlePost"

export const openModalPostEpic = action$ => action$.ofType(OPEN_MODAL).pipe(
  map(action => typeof action.postId !== 'undefined' && action.open !== false
    ? fetchSinglePost(action.postId)
    : clearSinglePost()
  )
)

export const fetchSinglePostEpic = (action$, state$, { axios$ }) => {
  return action$
    .ofType(FETCH_SINGLE_POST)
    .pipe(
      mergeMap(action => axios$(`/posts/${action.id}`).pipe(
        map(posts => posts.data),
        mergeMap(post => axios$(`/comments?postId=${post.id}`).pipe(
          map(comments => comments.data),
          map(comments => fetchSinglePostSuccess({comments, ...post})),
          takeUntil(action$.ofType(CLEAR_SINGLE_POST)),
          catchError(error => {
            console.log(error)
            return of(fetchSinglePostFailure('Cannot fetch Single Post'))
          })
        ))
      ))
    )
}