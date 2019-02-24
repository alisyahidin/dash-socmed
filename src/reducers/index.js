import { combineReducers } from 'redux'
import user from './user'
import post from './post'
import singlePost from './singlePost'

export default combineReducers({
  user,
  post,
  singlePost
})