import { shallow } from 'enzyme'
import React from 'react'
import Dependencies from './index'
/** @test {Dependencies} */
const wrapper = shallow(<Dependencies />)

describe('dependecies', () => {
  it('snapshot counter not connect', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })
})
