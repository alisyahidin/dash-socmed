import { combineEpics } from 'redux-observable'
import fetchUserEpic from './user'
import fetchPostEpic from './post'
import {
  openModalPostEpic,
  fetchSinglePostEpic
} from './singlePost'
import fetchSingleUserEpic from './singleUser'
import { loginEpic } from './auth'

export const rootEpic = combineEpics(
  fetchUserEpic,
  fetchPostEpic,
  openModalPostEpic,
  fetchSinglePostEpic,
  fetchSingleUserEpic,
  loginEpic,
)