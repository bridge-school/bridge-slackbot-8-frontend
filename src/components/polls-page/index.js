import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { directive } from '@babel/types'
import { Polls, H2 } from './style'

const pollsInfo = (data) => {
    return data.map( ({question, channel: {name},  channel: {id}}) => ({ question: question, name: name, id: id}))
}

class SubmittedPolls extends Component {
    constructor(props) {
        super(props)
        this.state = {
          pollsList: [],
          loading: false,
          testArr: [
              {
                  id: "a",
                  name: "channelA",
                  question: "questionA"
              },
              {
                id: "b",
                name: "channelB",
                question: "questionB"
            },
            {
                id: "c",
                name: "channelC",
                question: "questionC"
            }
          ]
        }
    }

    render() {
    return (
        <Polls>
            <H2>Submitted Polls</H2>

            { this.state.pollsList.length > 0 ? 
            (
                this.state.loading ? 
                // change to true while it's fetching the data needs to be addes
                (<p>Please wait while the list is loading.</p>)
                : (
                   <ul>
                       { this.state.pollsList.map(({id, name, question}) => 
                           <li>
                            <p>Channel: {name}</p>
                            <Link to={`/polls/:${id}`}>
                                {question}
                            </Link>
                           </li>
                       )}
                   </ul>
                )
            )
            : (
                <p>No polls to display</p>
            )
            }
        </Polls>
        )
    }

    componentDidMount() {
        fetch('http://localhost:8081/polls', { method: 'GET' })
        .then(res => res.json())
        .then(({data})  => {
            const polls = pollsInfo(data)

            this.setState({
                pollsList: polls,
                loading: false
            })
        })    
    }
}

export default SubmittedPolls