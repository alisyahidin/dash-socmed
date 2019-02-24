import { of } from 'rxjs'
import { takeUntil, mergeMap, map, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import {
  FETCH_SINGLE_USER,
  CLEAR_SINGLE_USER,
  fetchSingleUserSuccess,
  fetchSingleUserFailure
} from "../actions/singleUser"
import { posts, fakeAjaxSingleUser } from './lib/fakeAjax'

const fetchSingleUserEpic = action$ => {
  return action$
    .ofType(FETCH_SINGLE_USER)
    .pipe(
      mergeMap(action => fakeAjaxSingleUser(`/user/${action.id}`).pipe(
        map(response => ({...response, posts})),
        map(response => fetchSingleUserSuccess(response)),
        takeUntil(action$.pipe(
          ofType(CLEAR_SINGLE_USER)
        )),
        catchError(() => of(fetchSingleUserFailure('Cannot fetch singleUser')))
      ))
    )
}

export default fetchSingleUserEpic