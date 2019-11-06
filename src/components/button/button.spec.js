import { shallow } from 'enzyme'
import React from 'react'

import { Button } from 'grimorio-ui'
import MainButton from './button'

const props = {
  onClick: jest.fn()
}
const wrapper = shallow(<MainButton {...props} />)

it('prim', () => {
  console.log(wrapper.html())
  window.alert = jest.fn()
  jest.spyOn(window, 'alert')
  expect(wrapper.debug()).toMatchSnapshot()
  wrapper.find(Button).props().onClick()
  expect(window.alert).toHaveBeenCalled()
})
