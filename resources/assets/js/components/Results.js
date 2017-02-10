import React from 'react'
import styles from '../styles'
import MainContainer from './MainContainer'
import UserDetailsWrapper from './UserDetailsWrapper'
import UserDetails from './UserDetails'
import Loading from './Loading'
import { Link } from 'react-router'

function StartOver() {
    return (
        <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
                <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
            </Link>
        </div>
    )
}

function Results(props) {
    if (props.isLoading === true) {
        return (
            <Loading text='One Moment' speed={100} />
        )
    }

    if (props.scores[0] === props.scores[1]) {
        return (
            <MainContainer>
                <h1>Its a tie!</h1>
                <StartOver />
=           </MainContainer>
        )
    }

    let winningIndex = props.scores[0] > props.scores[1] ? 0 : 1
    let losingIndex = winningIndex === 0 ? 1 : 0

    return (
        <MainContainer>
            <h1>Results</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Winner'>
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Loser'>
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    )
}

Results.propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    playersInfo: React.PropTypes.array.isRequired,
    scores: React.PropTypes.array.isRequired,
}

export default Results