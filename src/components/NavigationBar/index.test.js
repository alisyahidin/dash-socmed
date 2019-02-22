import React from 'react'
import { shallow } from 'enzyme'
import NavigationBar from './index'

it('render <NavigationBar /> correctly', () => {
  const component = shallow(<NavigationBar />)

  expect(component).toMatchSnapshot()
})