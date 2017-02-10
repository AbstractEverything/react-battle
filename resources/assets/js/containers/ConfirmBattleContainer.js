import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

let ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState() {
        return {
            isLoading: true,
            playersInfo: [],
        }
    },
    componentDidMount() {
        let query = this.props.location.query
        // Fetch info from github then update state
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then((players) => {
            this.setState({
                isLoading: false,
                playersInfo: [players[0], players[1]],
            })
        })
    },
    handleInitiateBattle() {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo // push state through to results
            }
        })
    },
    render() {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                onInitiateBattle={this.handleInitiateBattle}
                playersInfo={this.state.playersInfo} />
        )
    }
})

export default ConfirmBattleContainer