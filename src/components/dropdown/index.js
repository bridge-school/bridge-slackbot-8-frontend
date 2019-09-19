import React from 'react'
import { Label, Select, OptionList, Option } from './style'

// Let the parent control the dropdown state
// We'll pass up our intended changes to the parent
const Dropdown = ({ id, label, value, placeholder, children, ...props }) => (
  <Select {...props}>
    <Label htmlFor={id}>{label}</Label>
    <OptionList currentValue={value} id={id}>
      <Option value="default" hidden>
        {placeholder}
      </Option>
      {children}
    </OptionList>
  </Select>
)

// TODO: we can create a utility function to prepend @ or # symbols
// to user groups or public channels if necessary
const OptionItem = ({ id, children, ...props }) => (
  <Option value={id} {...props}>
    {children}
  </Option>
)

// Set Option as a sub-component
Dropdown.Option = OptionItem

export default Dropdown
