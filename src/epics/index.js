import { combineEpics } from 'redux-observable'
import fetchUserEpic from './user'
import fetchPostEpic from './post'

export const rootEpic = combineEpics(
  fetchUserEpic,
  fetchPostEpic
)