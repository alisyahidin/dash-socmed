import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { from } from 'rxjs'
import axios from '../lib/api'

import rootReducer from '../reducers/'
import { rootEpic } from '../epics/'

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    fetch$: url => from(axios.get(url)),
    post$: (url, data, options = {}) => from(axios.post(url, data, options)),
  }
})
const store = createStore(rootReducer, applyMiddleware(epicMiddleware))
epicMiddleware.run(rootEpic)

export default store