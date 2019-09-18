import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { request } from '../../backend-request'

import FormInput from '../form-input'
import FormButton from '../button'
import Dropdown from '../dropdown'
import { InputError, ErrorBlock } from '../input-error'
import { Form, Legend, Fieldset } from './style'

// New poll request
const sendPoll = (data, errors, callback) => {
  const formSubmit = async () => {
    return await request('polls', 'POST', data)
  }
  formSubmit()
    .then(res => res.json())
    .then(data => callback(data.id))
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
  const [pollId, setPollId] = useState('')

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
  }

  // Handle submit
  const handleSubmit = async event => {
    event.preventDefault()
    const query = {
      question,
      channel_name: channel.name,
      channel_id: channel.id
    }
    await sendPoll(query, setErrors, setPollId)

    // Clear the field on submit
    setQuestion('')
    setChannel(null)
    setErrors({})
  }

  // Use hook to replace componentWillReceiveProps
  // Redirect user once poll id is set
  // TODO: display toast message for 5 seconds
  useEffect(() => {
    pollId && history.push(`/polls/${pollId}`)
  }, [pollId, history])

  // Render
  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Fieldset>
        <Legend>Create New Poll</Legend>
        {errors.api && <ErrorBlock errorMessage={errors.api} />}

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
          label={t('User Group')}
          placeholder={t('Select a channel')}
          value={channel}
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
