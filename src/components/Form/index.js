import React from 'react'

import FormInput from '../form-input'
import { Form, Legend, Fieldset } from './style'
import FormButton from '../Button'

class PollForm extends React.Component {
  constructor() {
    super()
    this.state = {
      question: '',
    }
  }

  handleInputChange = event => {
    this.setState({ question: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ question: '' }) // clear the field on submit
  }

  render() {
    return (
      <Form>
        <Fieldset>
          <Legend>Create New Poll</Legend>
          <FormInput
            id="question"
            name="question"
            label="Question"
            value={this.state.question}
            onChange={this.handleInputChange}
            required
          />
          <FormButton type="submit" onClick={this.handleSubmit}>
            Submit Poll
          </FormButton>
        </Fieldset>
      </Form>
    )
  }
}

export default PollForm
