import { shallow } from 'enzyme'
import React from 'react'
import Home from './index'

const wrapper = shallow(<Home />)

it('test render home page', () => {
  expect(wrapper.debug()).toMatchSnapshot()
})
