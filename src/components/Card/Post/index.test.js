import React from 'react'
import ReactDOM from 'react-dom'
import Post from './index'

it('render Post component', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Post />, div)
  ReactDOM.unmountComponentAtNode(div)
})
