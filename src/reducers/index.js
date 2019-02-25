import { combineReducers } from 'redux'
import user from './user'
import post from './post'
import singlePost from './singlePost'
import singleUser from './singleUser'
import auth from './auth'
import album from './album'

export default combineReducers({
  user,
  post,
  singlePost,
  singleUser,
  auth,
  album
})