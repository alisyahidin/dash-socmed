import { combineEpics } from 'redux-observable'
import fetchUserEpic from './user'
import fetchPostEpic from './post'
import {
  openModalPostEpic,
  fetchSinglePostEpic
} from './singlePost'

export const rootEpic = combineEpics(
  fetchUserEpic,
  fetchPostEpic,
  openModalPostEpic,
  fetchSinglePostEpic,
)