import React from 'react'
import { shallow } from 'enzyme'
import Card from './index'

it('render <Card /> correctly', () => {
  const component = shallow(<Card>Test</Card>)

  expect(component).toMatchSnapshot()
})