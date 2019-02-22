import React from 'react'
import { shallow } from 'enzyme'
import Users from './index'

it('render <Users /> correctly', () => {
  const component = shallow(<Users />)

  expect(component).toMatchSnapshot()
})