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

it('check <Post /> props', () => {
  const options = new ReactRouterEnzymeContext();
  const component = mount(
    <Provider store={store}>
      <Post />
    </Provider>,
    options.get()
  )

  expect(component.find(Post).props().author).toEqual({name: 'Guest', username: 'guest'})
  expect(component.find(Post).props().title).toBe('Title')
  expect(component.find(Post).props().body).toBe('Post')
  expect(component.find(Post).props().profileDisabled).toBeFalsy()
})

