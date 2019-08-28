import React, { Fragment } from 'react'
import { Label, Select, OptionList, Option } from './style'

// Let the parent control the dropdown state
// We'll pass up our intended changes to the parent
const Dropdown = ({ id, label, selected, placeholder, children, ...props }) => (
  <Fragment>
    <Select {...props}>
      <Label htmlFor={id}>{label}</Label>
      <OptionList id={id}>
        <Option value="">{placeholder}</Option>
        {children}
      </OptionList>
    </Select>
  </Fragment>
)

// TODO: we can later create a utility function to prepend @ or # symbols
// to user groups or public channels if necessary
const OptionItem = ({ id, children, ...props }) => (
  <Option value={id} {...props}>
    {children}
  </Option>
)

// Set Option as a sub-component
Dropdown.Option = OptionItem

export default Dropdown
