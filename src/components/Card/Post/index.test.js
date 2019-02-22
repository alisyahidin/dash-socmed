import React from 'react'
import { shallow } from 'enzyme'
import Post from './index'

it('render <Post /> correctly', () => {
  const component = shallow(<Post />)

  expect(component).toMatchSnapshot()
})