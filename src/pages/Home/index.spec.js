import { shallow } from 'enzyme'
import React from 'react'

import { Button } from 'grimorio-ui'
import App from './index'

const props = {
  onClick: jest.fn()
}
const wrapper = shallow(<App {...props} />)

it('prim', () => {
  window.alert = jest.fn()
  jest.spyOn(window, 'alert')
  expect(wrapper.debug()).toMatchSnapshot()
  wrapper
    .find(Button)
    .props()
    .onClick()
  expect(window.alert).toHaveBeenCalled()
})
