import { shallow } from 'enzyme'
import React from 'react'
import Counter from './index'

const wrapper = shallow(<Counter />)

it('snapshot counter not connect', () => {
  expect(wrapper.debug()).toMatchSnapshot()
})
