import React from 'react'

import FormInput from '../form-input'
import { Form } from './style'
import FormButton from '../Button'

const PollForm = () => (
  <Form>
    <FormInput id="question" label="Question" />
    <FormButton label="Submit Poll" type="submit" />
  </Form>
)

export default PollForm
