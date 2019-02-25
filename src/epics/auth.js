import { mergeMap, map } from 'rxjs/operators'
import {
  LOGIN,
  CHECK_AUTHENTICATED_USER,
  loginSuccess,
  loginFailure
} from '../actions/auth'
import { fakeAjaxUser } from './lib/fakeAjax'
import storage from '../lib/storage'

export const loginEpic = action$ => {
  return action$
    .ofType(LOGIN)
    .pipe(
      mergeMap(action => fakeAjaxUser('/users').pipe(
        map(users => users.filter(user =>
          user.username === action.payload.username &&
          user.email === action.payload.email
        )),
        map(user => {
          if (user.length === 1) {
            storage.set('user', JSON.stringify(user[0]))
            return loginSuccess(user[0])
          } else {
            return loginFailure('Username and email not match!')
          }
        })
      ))
    )
}

export const checkAuthenticatedUserEpic = action$ => {
  return action$
    .ofType(CHECK_AUTHENTICATED_USER)
    .pipe(
      mergeMap(action => fakeAjaxUser('/users').pipe(
        map(users => users.filter(user =>
          user.username === action.payload.username &&
          user.email === action.payload.email
        )),
        map(user => user.length === 1 ? loginSuccess(user[0]) : loginFailure('not match'))
      ))
    )
}