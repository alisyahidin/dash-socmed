import React from 'react'
import ReactDOM from 'react-dom'
import UserList from './index'

it('render UserList component', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UserList />, div)
  ReactDOM.unmountComponentAtNode(div)
})
