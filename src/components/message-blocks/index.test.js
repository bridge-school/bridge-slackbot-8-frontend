import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { InputError } from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('InputError component', () => {
  test('renders', () => {
    const errorMessage = 'Some error for the input'
    const wrapper = mount(
      <InputError errorMessage={errorMessage} errorFor="myInput" />
    )
    expect(wrapper.text()).toEqual(errorMessage)
  })
})
