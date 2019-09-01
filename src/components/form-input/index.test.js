import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FormInput from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('FormInput component', () => {
  test('renders', () => {
    const wrapper = shallow(
      <FormInput id="input-id" label="label for the input" />
    )

    expect(wrapper.exists()).toBe(true)
  })
})
