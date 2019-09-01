import React, { Component } from 'react'

import FormInput from '../form-input'
import FormButton from '../button'
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
      errors: {
        question: ''
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const { value } = event.target

    this.setState({
      question: value,
      errors: { ...this.state.errors, question: '' }
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
