import React from 'react'
import { shallow } from 'enzyme'
import { Route } from 'react-router-dom'
import App from './index'

it('render <App /> correctly', () => {
  const component = shallow(<App />)

  expect(component).toMatchSnapshot()
})

it('count valid Route components', () => {
  const component = shallow(<App />)

  expect(component.find(Route)).toHaveLength(6)
})