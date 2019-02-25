import React from 'react'
import { shallow, mount } from 'enzyme'
import AlbumDetail from './index'

it('render <AlbumDetail /> correctly', () => {
  const component = shallow(<AlbumDetail />)

  expect(component).toMatchSnapshot()
})