import { shallow } from 'enzyme'
import App from './app'
import React from 'react'

const props = {
  onClick: jest.fn()
}
const wrapper = shallow(<App {...props} />)

it('prim', () => {
  expect(wrapper.debug()).toMatchSnapshot()
  wrapper.simulate('click')
  expect(props.onClick).toHaveBeenCalled()
})
