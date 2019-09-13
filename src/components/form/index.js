import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'

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

const sendPoll = () => fetch('http://localhost:8081/poll', { method: 'POST' })

class PollForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: '',
      channel: null,
      options: [],
      errors: {
        question: ''
      }
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
    const { t } = this.props

    const questionError = t('Question is required')

    await (question.length === 0 &&
      this.setState({
        errors: { ...errors, question: questionError }
      }))

    try {
      validateForm(this.state.errors)
        ? // turn to if/else caus we need to send the poll and clear the form
          console.log('form valid')
        : console.log('form invalid')

      sendPoll()

      // clear the field on submit
      this.setState({ question: '' })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    // Set fetched channels to state when component mounts
    this.setState({ options: this.props.channels })
  }

  render() {
    const { t } = this.props
    const { question, errors } = this.state
    return (
      <Form onSubmit={this.handleSubmit} noValidate>
        <Fieldset>
          <Legend>Create New Poll</Legend>
          <FormInput
            id="question"
            name="question"
            label={t('Question')}
            value={question}
            onChange={this.handleInputChange}
            required
          />
          <Dropdown
            id="channel"
            label={t('User Group')}
            placeholder={t('Select a channel')}
            value={this.state.selected}
            onChange={this.handleInputChange}
          >
            {this.props.channels.map(({ id, name, option }) => (
              <Dropdown.Option key={id} id={name}>
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

const mapStateToProps = state => ({
  channels: state.requestsReducer.channels
})

const PollFormContainer = connect(mapStateToProps)(PollForm)

export default withTranslation()(PollFormContainer)
