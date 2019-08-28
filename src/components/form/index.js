import React, { Component } from 'react'
import FormInput from '../form-input'
import FormButton from '../button'
import Dropdown from '../dropdown'
import { Form, Legend, Fieldset } from './style'

class PollForm extends Component {
  constructor() {
    super()
    this.state = {
      question: '',
      selected: null,

      // Dummy data, this should be replaced once connected to the store and to the Slack API
      // If needed, we can create a utility function to map the fetched channels to an array
      // of objects containing option and value pairs
      options: ['general', 'random', 'toronto']
    }
  }

  handleInputChange = event => {
    this.setState({ question: event.target.value })
  }

  handleDropdownSelect = event => {
    this.setState({ selected: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    // clear the field on submit
    this.setState({ question: '' })
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
          <Dropdown
            id="channel"
            label="User Group"
            placeholder="Select a channel"
            value={this.state.selected}
            onChange={this.handleDropdownSelect}
          >
            {this.state.options.map((option, index) => (
              <Dropdown.Option key={`option-${index}`} id={option}>
                {option}
              </Dropdown.Option>
            ))}
          </Dropdown>
          <FormButton type="submit" onClick={this.handleSubmit}>
            Submit Poll
          </FormButton>
        </Fieldset>
      </Form>
    )
  }
}

export default PollForm
