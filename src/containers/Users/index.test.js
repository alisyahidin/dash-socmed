import React from 'react'
import ReactDOM from 'react-dom'
import Users from './index'

it('render Users container', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Users />, div)
  ReactDOM.unmountComponentAtNode(div)
})
