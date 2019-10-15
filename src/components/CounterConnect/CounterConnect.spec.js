import { shallow } from 'enzyme'
import React from 'react'
import { Counter } from './index'

const wrapper = shallow(<Counter />)

it('snapshot counter connect', () => {
  expect(wrapper.debug()).toMatchSnapshot()
})
