import React from 'react'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import ReactRouterEnzymeContext from 'react-router-enzyme-context'
import store from '../../../store/'
import Post from './index'

it('render <Post /> correctly', () => {
  const component = shallow(<Post />)

  expect(component).toMatchSnapshot()
})