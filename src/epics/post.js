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
        map(response => fetchPostSuccess(response.data)),
        catchError(error => {
          console.log(error)
          return of(fetchPostFailure('Cannot get posts, please try again :)'))
        })
      ))
    )
}

export default fetchPostEpic