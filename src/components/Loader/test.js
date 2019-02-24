import React from 'react'
import { shallow } from 'enzyme'
import PostLoader from './PostLoader'
import ProfileLoader from './ProfileLoader'
import UserLoader from './UserLoader'

it('render <PostLoader /> correctly', () => {
  const component = shallow(<PostLoader />)

  expect(component).toMatchSnapshot()
})

it('render <ProfileLoader /> correctly', () => {
  const component = shallow(<ProfileLoader />)

  expect(component).toMatchSnapshot()
})

it('render <UserLoader /> correctly', () => {
  const component = shallow(<UserLoader />)

  expect(component).toMatchSnapshot()
})