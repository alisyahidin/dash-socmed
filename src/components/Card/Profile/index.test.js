import React from 'react'
import { shallow, mount } from 'enzyme'
import Profile from './index'

it('render <Profile /> correctly', () => {
  const component = shallow(<Profile />)

  expect(component).toMatchSnapshot()
})

it('check <Profile /> props', () => {
  const component = mount(<Profile />)

  expect(component.props().user.name).toBe('Guest')
  expect(component.props().user.username).toBe('guest')
})
