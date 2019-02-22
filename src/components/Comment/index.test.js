import React from 'react'
import { shallow, mount } from 'enzyme'
import Comment from './index'
import CommentForm from './Form/'

it('render <Comment /> correctly', () => {
  const component = shallow(<Comment />)

  expect(component).toMatchSnapshot()
})

it('render <CommentForm /> correctly', () => {
  const component = shallow(<CommentForm />)

  expect(component).toMatchSnapshot()
})