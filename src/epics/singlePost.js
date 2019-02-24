import { of } from 'rxjs'
import { takeUntil, mergeMap, map, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import {
  OPEN_MODAL,
  FETCH_SINGLE_POST,
  CLEAR_SINGLE_POST,
  fetchSinglePost,
  fetchSinglePostSuccess,
  fetchSinglePostFailure
} from "../actions/singlePost"
import { fakeAjaxSinglePost } from './lib/fakeAjax'

export const openModalPostEpic = action$ => action$.pipe(
  ofType(OPEN_MODAL),
  map(action => fetchSinglePost(action.postId))
)

export const fetchSinglePostEpic = action$ => {
  return action$.pipe(
    ofType(FETCH_SINGLE_POST),
    mergeMap(action => fakeAjaxSinglePost(`/post/${action.id}`).pipe(
      map(response => fetchSinglePostSuccess(response)),
      takeUntil(action$.pipe(
        ofType(CLEAR_SINGLE_POST)
      )),
      catchError(() => of(fetchSinglePostFailure('Cannot fetch post')))
    ))
  )
}