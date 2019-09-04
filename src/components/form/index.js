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

class PollForm extends Component {
  constructor() {
    super()

    this.state = {
      question: '',
      channel: null,
      errors: {
        question: ''
      },

      // Dummy data, this should be replaced once connected to the store and to the Slack API
      // If needed, we can create a utility function to map the fetched channels to an array
      // of objects containing option and value pairs
      options: ['general', 'random', 'toronto']
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const { value, id } = event.target

    this.setState({
      [id]: value,
      errors: { ...this.state.errors, [id]: '' }
    })
  }

  async handleSubmit(event) {
    event.preventDefault()

    const { question, errors } = this.state

    await (question.length === 0 &&
      this.setState({
        errors: { ...errors, question: 'Question is required' }
      }))

    try {
      validateForm(this.state.errors)
        ? console.log('form valid')
        : console.log('form invalid')
      // clear the field on submit
      this.setState({ question: '' })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { question, errors } = this.state
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
            value={this.state.selected}
            onChange={this.handleInputChange}
          >
            {this.state.options.map((option, index) => (
              <Dropdown.Option key={`option-${index}`} id={option}>
                {option}
              </Dropdown.Option>
            ))}
          </Dropdown>
          {errors.question.length > 0 && (
            <InputError errorMessage={errors.question} />
          )}
          <FormButton type="submit" onClick={this.handleSubmit}>
            Submit Poll
          </FormButton>
        </Fieldset>
      </Form>
    )
  }
}

export default PollForm
