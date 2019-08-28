import React from 'react'

import FormInput from '../form-input'
import { Form, Legend, Fieldset } from './style'
import FormButton from '../Button'

const PollForm = () => (
  <Form>
    <Fieldset>
      <Legend>Create New Poll</Legend>
      <FormInput id="question" label="Question" />
      <FormButton label="Submit Poll" type="submit" />
    </Fieldset>
  </Form>
)

export default PollForm
