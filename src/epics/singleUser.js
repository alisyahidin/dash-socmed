import { of } from 'rxjs'
import { delay, takeUntil, mergeMap, map, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import {
  FETCH_SINGLE_USER,
  CLEAR_SINGLE_USER,
  fetchSingleUserSuccess,
  fetchSingleUserFailure
} from "../actions/singleUser"
import {
  albums,
  posts,
  fakeAjaxSingleUser
} from './lib/fakeAjax'
import storage from '../lib/storage'

const fetchSingleUserEpic = action$ => {
  return action$
    .ofType(FETCH_SINGLE_USER)
    .pipe(
      mergeMap(action => {
        const user$ = typeof action.id === 'undefined'
          ? of(JSON.parse(storage.get('user'))).pipe(delay(2000))
          : fakeAjaxSingleUser(`/user/${action.id}`)
        return user$.pipe(
          map(response => ({...response, posts})),
          map(response => ({...response, albums})),
          map(response => fetchSingleUserSuccess(response)),
          takeUntil(action$.pipe(
            ofType(CLEAR_SINGLE_USER)
          )),
          catchError(() => of(fetchSingleUserFailure('Cannot fetch singleUser')))
        )
      })
    )
}

export default fetchSingleUserEpic