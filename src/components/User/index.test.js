import React from 'react'
import ReactDOM from 'react-dom'
import User from './index'

it('render User component', () => {
  const div = document.createElement('div')
  ReactDOM.render(<User />, div)
  ReactDOM.unmountComponentAtNode(div)
})
