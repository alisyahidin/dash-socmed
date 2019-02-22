import React from 'react'
import { shallow, mount } from 'enzyme'
import ReactRouterEnzymeContext from 'react-router-enzyme-context'
import Image from './index'

it('render <Image /> correctly', () => {
  const component = shallow(<Image />)

  expect(component).toMatchSnapshot()
})

it('check <Image /> props', () => {
  const options = new ReactRouterEnzymeContext()
  const component = mount(
    <Image src="../../assets/images/placeholder.png" />,
    options.get()
  )

  expect(component.props().src).toBeDefined()
})