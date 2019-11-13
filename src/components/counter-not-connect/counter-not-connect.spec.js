import { shallow } from 'enzyme'
import React from 'react'
import Counter from './index'

let wrapper

describe('not connect', () => {
  beforeEach(() => {
    wrapper = shallow(<Counter />)
  })

  it('snapshot counter not connect', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })

  it('renders with initial value of 0', () => {
    expect(wrapper.find('.value').text()).toEqual('0')
  })

  it('increments value when clicking +1', () => {
    wrapper.find('#increment-btn').simulate('click')
    expect(wrapper.find('.value').text()).toEqual('1')
  })

  it('decrement value when clicking -1', () => {
    wrapper.find('#decrement-btn').simulate('click')
    expect(wrapper.find('.value').text()).toEqual('-1')
  })

  it('reset value for 0', () => {
    wrapper.find('#reset-btn').simulate('click')
    expect(wrapper.find('.value').text()).toEqual('0')
  })
})
