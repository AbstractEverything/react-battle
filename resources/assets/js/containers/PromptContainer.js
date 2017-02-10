import React from 'react'
import Prompt from '../components/Prompt'

let PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState() {
        return {
            username: ''
        }
    },
    handleSubmitUser(e) {
        e.preventDefault()
        var username = this.state.username
        this.setState({
            username: ''
        })

        if (this.props.routeParams.playerOne) {
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username,
                }
            })
        } else {
            this.context.router.push('/playerTwo/' + this.state.username)
        }
    },
    handleUpdateUser(e) {
        this.setState({
            username: e.target.value
        })
    },
    render() {
        return (
            // Presentation logic separated from PromptContainer
            // Similar to how its done in Vue
            <Prompt
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username} />
        )
    }
})

export default PromptContainer