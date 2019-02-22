import React from 'react'
import { shallow } from 'enzyme'
import User from './index'

it('render <User /> correctly', () => {
  const component = shallow(<User />)

  expect(component).toMatchSnapshot()
})