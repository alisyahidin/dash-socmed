import { of } from 'rxjs'
import { mergeMap, map, catchError } from 'rxjs/operators'

import {
  FETCH_USER,
  fetchUserSuccess,
  fetchUserFailure
} from "../actions/user"

const fetchUserEpic = (action$, state$, { axios$ }) => {
  return action$
    .ofType(FETCH_USER)
    .pipe(
      mergeMap(action => axios$('/users').pipe(
        map(response => fetchUserSuccess(response.data)),
        catchError(error => {
          console.log(error)
          return of(fetchUserFailure('Cannot get users, please try again :)'))
        })
      ))
    )
}

export default fetchUserEpic