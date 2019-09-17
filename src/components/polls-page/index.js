import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { directive } from '@babel/types'
import { Polls, H2 } from './style'

const pollsInfo = (data) => {
    return data.map( ({question, channel: {name}, id}) => ({ question: question, name: name, id}))
}

class SubmittedPolls extends Component {
    constructor(props) {
        super(props)
        this.state = {
          pollsList: [],
          loading: true,
        }
    }

    render() {
    return (
        <Polls>
            <H2>Submitted Polls</H2>

            { this.state.loading ? 
                <p>Please wait while the list is loading.</p>
                : (
                    this.state.pollsList.length > 0 ? 
                   (<ul>
                        { this.state.pollsList.map(({id, name, question}) => 
                            <li key={id}>
                                <p>Channel: {name}</p>
                                <Link to={`/polls/:${id}`}>
                                    {question}
                                </Link>
                            </li>
                        )}
                    </ul>) 
                    : <p>No polls to display, please submit one <Link to="/">here</Link>.</p> 
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