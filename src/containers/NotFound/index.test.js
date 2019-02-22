import React from 'react'
import { shallow } from 'enzyme'
import NotFound from './index'

it('render <NotFound /> correctly', () => {
  const component = shallow(<NotFound />)

  expect(component).toMatchSnapshot()
})