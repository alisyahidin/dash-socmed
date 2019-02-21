import React from 'react'
import ReactDOM from 'react-dom'
import Image from './index'

it('render Image component', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Image />, div)
  ReactDOM.unmountComponentAtNode(div)
})
