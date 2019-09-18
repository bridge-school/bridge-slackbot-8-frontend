import React, { useState, useEffect } from 'react'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { request } from '../../backend-request'
import { createPoll } from '../../store/actions/request-actions'

import FormInput from '../form-input'
import FormButton from '../button'
import Dropdown from '../dropdown'
import { Form, Legend, Fieldset } from './style'

const sendPoll = (data, callback) => {
  const formData = async () => {
    return await request('polls', 'POST', data)
  }

  return callback(formData)
}

const PollForm = ({ t, channels, pollId, createPoll }) => {
  const [question, setQuestion] = useState('')
  const [channel, setChannel] = useState(null)

  // Handle input change
  const handleInputChange = event => {
    const { value, id } = event.target

    switch (id) {
      case 'question':
        setQuestion(value)
        break
      case 'channel':
        // Map channel id to selected value
        const channelId = channels
          .filter(({ name }) => name === value)
          .map(({ id }) => id)[0]

        setChannel({ id: channelId, name: value })
        break
      default:
        return
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

    await sendPoll(query, createPoll)

    // Clear the field on submit
    setQuestion('')
    setChannel(null)
  }

  // Use hook to replace componentWillReceiveProps
  useEffect(() => {
    // TODO: Redirect user once poll id is set
    pollId && console.log(`redirect to '/polls/${pollId}'`)
  }, [pollId])

  // Render
  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Fieldset>
        <Legend>Create New Poll</Legend>
        <FormInput
          id="question"
          name="question"
          label={t('Question')}
          value={question}
          onChange={handleInputChange}
          required
        />
        <Dropdown
          id="channel"
          label={t('User Group')}
          placeholder={t('Select a channel')}
          value={channel}
          onChange={handleInputChange}
        >
          {channels.map(({ id, name, option }) => (
            <Dropdown.Option key={id} id={name}>
              {option}
            </Dropdown.Option>
          ))}
        </Dropdown>
        <FormButton type="submit" onClick={handleSubmit}>
          Submit Poll
        </FormButton>
      </Fieldset>
    </Form>
  )
}

const mapStateToProps = state => ({
  channels: state.channelsReducer.channels,
  pollId: state.pollsReducer.pollId
})

const mapDispatchToProps = {
  createPoll
}

const PollFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PollForm)

export default withTranslation()(PollFormContainer)
