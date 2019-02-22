import React from 'react'
import { shallow } from 'enzyme'
import Login from './index'

it('render <Login /> correctly', () => {
  const component = shallow(<Login />)

  expect(component).toMatchSnapshot()
})