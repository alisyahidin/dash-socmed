import React from 'react'
import { shallow, mount } from 'enzyme'
import Card from './index'

it('render <Card /> correctly', () => {
  const component = shallow(<Card />)

  expect(component).toMatchSnapshot()
})

it('check <Card /> props', () => {
  const component = mount(<Card />)

  expect(component.props().children).toBeDefined()
  expect(component.props().align).toBe('center')
})