import React from 'react'
import { shallow, mount } from 'enzyme'
import Footer from './index'

it('render <Footer /> correctly', () => {
  const component = shallow(<Footer />)

  expect(component).toMatchSnapshot()
})