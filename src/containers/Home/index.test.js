import React from 'react'
import { shallow } from 'enzyme'
import Home from './index'

it('render <Home /> correctly', () => {
  const component = shallow(<Home />)

  expect(component).toMatchSnapshot()
})