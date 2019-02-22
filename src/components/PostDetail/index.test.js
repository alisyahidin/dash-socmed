import React from 'react'
import { shallow, mount } from 'enzyme'
import PostDetail from './index'

it('render <PostDetail /> correctly', () => {
  const component = shallow(<PostDetail />)

  expect(component).toMatchSnapshot()
})