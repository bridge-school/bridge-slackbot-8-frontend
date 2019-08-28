import React from 'react';

import FormInput from '../form-input';
import FormButton from '../button';
import { Form, Legend, Fieldset } from './style';

class PollForm extends React.Component {
  constructor() {
    super();
    this.state = {
      question: ''
    };
  }

  handleInputChange = event => {
    this.setState({ question: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    // clear the field on submit
    this.setState({ question: '' });
  };

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
    );
  }
}

export default PollForm;
