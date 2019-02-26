import { from, of } from 'rxjs'
import { mergeMap, map, catchError, take } from 'rxjs/operators'

import {
  FETCH_POST,
  fetchPostSuccess,
  fetchPostFailure
} from '../actions/post'
import { random } from '../helper'

const fetchPostEpic = (action$, state$, { axios$ }) => {
  return action$
    .ofType(FETCH_POST)
    .pipe(
      mergeMap(action => axios$('/posts').pipe(
        mergeMap(response => from(response.data).pipe(
          take(random(5, 50)),
          mergeMap(post => axios$(`/users/${post.userId}`).pipe(
            map(user => {
              const posts = [...state$.value.post.data]
              posts.push({user: user.data, ...post})
              return fetchPostSuccess(posts)
            }),
          ))
        )),
        catchError(error => {
          console.log(error)
          return of(fetchPostFailure('Cannot get posts, please try again :)'))
        })
      ))
    )
}

export default fetchPostEpic