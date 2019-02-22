import React from 'react'
import { shallow } from 'enzyme'
import Profile from './index'

it('render <Profile /> correctly', () => {
  const component = shallow(<Profile />)

  expect(component).toMatchSnapshot()
})