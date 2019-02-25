import storage from '../../lib/storage'

const Protected = ({children}) =>
  storage.has('user') ? children : null

export default Protected