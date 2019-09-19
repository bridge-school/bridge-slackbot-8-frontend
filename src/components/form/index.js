import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { request } from '../../backend-request'
import { nullCheck, validateForm } from '../../utils/validate'

import FormInput from '../form-input'
import FormButton from '../button'
import Dropdown from '../dropdown'
import { InputError, MessageBlock } from '../message-blocks'
import { Form, Legend, Fieldset } from './style'

// New poll request
const sendPoll = (data, errors, callback) => {
  const formSubmit = async () => {
    return await request('polls', 'POST', data)
  }
  formSubmit()
    .then(res => res.json())
    .then(data => callback({ state: true, ...data }))
    .catch(error => errors({ api: error }))
}

// Componentize dropdown list to organize form component and for better readability
const DropdownList = ({ list }) =>
  list.map(({ id, name, option }) => (
    <Dropdown.Option key={id} id={name}>
      {option}
    </Dropdown.Option>
  ))

const PollForm = ({ t, channels, history }) => {
  const [question, setQuestion] = useState('')
  const [channel, setChannel] = useState(null)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState({ state: false })

  // Handle input change
  const handleInputChange = event => {
    const { value, id } = event.target

    if (id === 'question') {
      setQuestion(value)
    } else if (id === 'channel') {
      // Map channel id to selected value
      const channelId = channels
        .filter(({ name }) => name === value)
        .map(({ id }) => id)[0]

      setChannel({ id: channelId, name: value })
    }

    // Clear errors on input change
    setErrors({ ...errors, [id]: null, api: null })
  }

  // Handle submit
  const handleSubmit = async event => {
    event.preventDefault()
    const isNull = await nullCheck(t, { question, channel })

    try {
      if (validateForm(isNull)) {
        const query = {
          question,
          channel_name: channel.name,
          channel_id: channel.id
        }
        sendPoll(query, setErrors, setSuccess)

        // Clear the field on submit
        setQuestion('')
        setChannel(null)
        setErrors({})
      } else {
        setErrors({ ...errors, ...isNull })
      }
    } catch (error) {
      setErrors({ api: error })
    }
  }

  // Show toast message for 4s, then redirect user on form submission success
  useEffect(() => {
    success.state &&
      setTimeout(() => history.push(`/polls/${success.id}`), 4000)
  }, [success, history])

  // Render
  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Fieldset>
        <Legend>Create New Poll</Legend>
        {(errors.api && <MessageBlock type="error" message={errors.api} />) ||
          (success.state && (
            <MessageBlock type="success" message={success.message} />
          ))}

        <FormInput
          id="question"
          name="question"
          label={t('Question')}
          value={question}
          onChange={handleInputChange}
          required
        />
        {errors.question && <InputError errorMessage={errors.question} />}

        <Dropdown
          id="channel"
          label={t('Channels')}
          placeholder={t('Select a channel')}
          value={channel ? channel : 'default'}
          onChange={handleInputChange}
        >
          <DropdownList list={channels} />
        </Dropdown>
        {errors.channel && <InputError errorMessage={errors.channel} />}

        <FormButton type="submit" onClick={handleSubmit}>
          Submit Poll
        </FormButton>
      </Fieldset>
    </Form>
  )
}

const mapStateToProps = state => ({
  channels: state.channelsReducer.channels
})

const PollFormContainer = connect(mapStateToProps)(withRouter(PollForm))

export default withTranslation()(PollFormContainer)
