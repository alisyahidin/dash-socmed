import { of } from 'rxjs'
import { mergeMap, map, catchError } from 'rxjs/operators'

import {
  FETCH_POST,
  fetchPostSuccess,
  fetchPostFailure
} from '../actions/post'

const fetchPostEpic = (action$, state$, { axios$ }) => {
  return action$
    .ofType(FETCH_POST)
    .pipe(
      mergeMap(action => axios$('/posts').pipe(
        map(response => response.data),
        map(data => fetchPostSuccess(data)),
        catchError(error => of(fetchPostFailure('Cannot get posts, please try again :)')))
      ))
    )
}

export default fetchPostEpic