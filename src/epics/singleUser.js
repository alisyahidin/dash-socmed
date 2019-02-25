import { of } from 'rxjs'
import { delay, takeUntil, mergeMap, map, catchError } from 'rxjs/operators'

import {
  FETCH_SINGLE_USER,
  CLEAR_SINGLE_USER,
  fetchSingleUserSuccess,
  fetchSingleUserFailure
} from '../actions/singleUser'
import storage from '../lib/storage'

const fetchSingleUserEpic = (action$, state$, { axios$ } ) => {
  return action$
    .ofType(FETCH_SINGLE_USER)
    .pipe(
      mergeMap(action => {
        const user$ = typeof action.id === 'undefined'
          ? of(JSON.parse(storage.get('user'))).pipe(delay(2000))
          : axios$(`/users/${action.id}`)
        return user$.pipe(
          map(response => response.data),
          mergeMap(user => axios$(`/posts?userId=${user.id}`).pipe(
            map(posts => ({posts: posts.data, ...user})),
            mergeMap(user => axios$(`/albums?userId=${user.id}`).pipe(
              map(albums => ({albums: albums.data, ...user})),
              map(user => fetchSingleUserSuccess(user)),
              takeUntil(action$.ofType(CLEAR_SINGLE_USER))
            ))
          )),
          catchError(error => {
            console.log(error)
            return of(fetchSingleUserFailure('Cannot get user, please try again :)'))
          })
        )
      })

    )
}

export default fetchSingleUserEpic