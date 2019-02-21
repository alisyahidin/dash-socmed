import React from 'react'
import ReactDOM from 'react-dom'
import Card from './index'

it('render Card component', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Card />, div)
  ReactDOM.unmountComponentAtNode(div)
})
