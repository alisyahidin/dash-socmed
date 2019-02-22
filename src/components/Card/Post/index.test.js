import React from 'react'
import { MemoryRouter } from 'react-router'
import { shallow, mount } from 'enzyme'
import ReactRouterEnzymeContext from 'react-router-enzyme-context'
import Post from './index'

it('render <Post /> correctly', () => {
  const component = shallow(<Post />)

  expect(component).toMatchSnapshot()
})

it('check <Post /> props', () => {
  const options = new ReactRouterEnzymeContext();
  const component = mount(
    <Post />,
    options.get()
  )

  expect(component.props().author).toEqual({name: 'Guest', username: 'guest'})
  expect(component.props().title).toBe('Title')
  expect(component.props().body).toBe('Post')
  expect(component.props().profileDisabled).toBeFalsy()
})

