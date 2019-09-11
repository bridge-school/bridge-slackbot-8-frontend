import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import { request } from '../../backend-request/index'

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

const fetchChannels = async () =>
  await request('channels')
    .then(res => res.json())
    .then(res =>
      res
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map(channel => ({ ...channel, option: `#${channel.name}` }))
    )

const sendPoll = () => fetch('http://localhost:8081/poll', { method: "POST" })

class PollForm extends Component {
  constructor() {
    super()

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
      // turn to if/else caus we need to send the poll and clear the form
        ? console.log('form valid')
        : console.log('form invalid')

        sendPoll()

      // clear the field on submit
      this.setState({ question: '' })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    // Fetch channels from backend and set in state
    // TODO: convert to redux and shrink down/modularize component
    fetchChannels().then(data => this.setState({ options: data }))
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
            {this.state.options.map(({ id, name, option }) => (
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

export default withTranslation()(PollForm)
