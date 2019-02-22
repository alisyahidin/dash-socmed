import React from 'react'
import { shallow } from 'enzyme'
import App from './index'

it('render <App /> correctly', () => {
  const component = shallow(<App />)

  expect(component).toMatchSnapshot()
})