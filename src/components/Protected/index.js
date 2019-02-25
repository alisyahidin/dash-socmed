import storage from '../../lib/storage'

const Protected = ({children, alternative}) =>
  storage.has('user') ? children : alternative

Protected.defaultProps = {
  alternative: null
}

export default Protected