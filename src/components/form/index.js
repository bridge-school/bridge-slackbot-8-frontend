import React, { Component } from 'react'

import FormInput from '../form-input'
import FormButton from '../button'
import Dropdown from '../dropdown'
import InputError from '../input-error'
import { Form, Legend, Fieldset } from './style'

const validateForm = errors => {
  let valid = true
  Object.values(errors).forEach(val => {
    val.length > 0 && (valid = false)
  })
  return valid
}

const nullCheck = fields =>
  Object.entries(fields).reduce(
    (acc, [key, value]) => (!value ? [...acc, `${key} is required`] : acc),
    []
  )

class PollForm extends Component {
  constructor() {
    super()

    this.state = {
      question: '',
      channel: null,
      // Dummy data, this should be replaced once connected to the store and to the Slack API
      // If needed, we can create a utility function to map the fetched channels to an array
      // of objects containing option and value pairs
      options: ['general', 'random', 'toronto'],
      errors: []
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const { value, id } = event.target

    this.setState({
      [id]: value,
      errors: []
    })
  }

  async handleSubmit(event) {
    event.preventDefault()

    const { question, channel } = this.state
    const errors = await nullCheck({ question, channel })

    try {
      validateForm(errors)
        ? // if no errors, do something then clear the field on submit
          this.setState({ question: '', channel: null })
        : // if errors, set errors in state for re-render
          this.setState({ errors })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { question, channel, options, errors } = this.state
    return (
      <Form onSubmit={this.handleSubmit} noValidate>
        <Fieldset>
          <Legend>Create New Poll</Legend>
          <FormInput
            id="question"
            name="question"
            label="Question"
            value={question}
            onChange={this.handleInputChange}
            required
          />
          <Dropdown
            id="channel"
            label="User Group"
            placeholder="Select a channel"
            value={channel}
            onChange={this.handleInputChange}
          >
            {options.map((option, index) => (
              <Dropdown.Option key={`option-${index}`} id={option}>
                {option}
              </Dropdown.Option>
            ))}
          </Dropdown>
          {errors &&
            errors.map((error, i) => (
              <InputError key={`error-${i}`} errorMessage={error} />
            ))}
          <FormButton type="submit" onClick={this.handleSubmit}>
            Submit Poll
          </FormButton>
        </Fieldset>
      </Form>
    )
  }
}

export default PollForm
