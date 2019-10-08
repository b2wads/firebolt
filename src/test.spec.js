import { shallow } from 'enzyme'
import App from './app'
import React from 'react'
const wrapper = shallow(<App />)

it('prim', () => {
  expect(wrapper.find('Button')).toHaveLength(1)
})
