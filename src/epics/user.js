import { of } from 'rxjs'
import { delay, map, catchError } from 'rxjs/operators'

import {
  FETCH_USER,
  fetchUserSuccess,
  fetchUserFailure
} from "../actions/user";

const users = [
  {
    id: 1,
    name: 'Guest_1'
  },
  {
    id: 2,
    name: 'Guest_2'
  },
  {
    id: 3,
    name: 'Guest_3'
  },
]

const fetchUserEpic = action$ => {
  return action$
    .ofType(FETCH_USER)
    .pipe(
      delay(3000),
      map(user => {
        return fetchUserSuccess(users)
      }),
      catchError(users => of(fetchUserFailure('Cannot fetch user')))
    )
}

export default fetchUserEpic