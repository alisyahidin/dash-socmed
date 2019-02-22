import React from 'react'
import { shallow } from 'enzyme'
import PostForm from './index'

it('render <PostForm /> correctly', () => {
  const component = shallow(<PostForm />)

  expect(component).toMatchSnapshot()
})