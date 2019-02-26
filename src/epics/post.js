import { from, of } from 'rxjs'
import { mergeMap, map, catchError, take } from 'rxjs/operators'

import {
  FETCH_POST,
  fetchPostSuccess,
  fetchPostFailure
} from '../actions/post'
import { random } from '../helper'

const fetchPostEpic = (action$, state$, { fetch$ }) => {
  return action$
    .ofType(FETCH_POST)
    .pipe(
      mergeMap(action => fetch$('/posts').pipe(
        mergeMap(response => from(response.data).pipe(
          take(random(5, 50)),
          mergeMap(post => fetch$(`/users/${post.userId}`).pipe(
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