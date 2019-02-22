import React from 'react'
import { shallow } from 'enzyme'
import Image from './index'

it('render <Image /> correctly', () => {
  const component = shallow(<Image />)

  expect(component).toMatchSnapshot()
})