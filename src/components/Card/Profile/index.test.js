import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './index'

it('render Profile component', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Profile />, div)
  ReactDOM.unmountComponentAtNode(div)
})
