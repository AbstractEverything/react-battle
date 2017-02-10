import React from 'react'
import styles from '../styles'
import { Link } from 'react-router'
import MainContainer from './MainContainer'

let Home = React.createClass({
    render() {
        return (
            <MainContainer>
                <h1>Github Battle</h1>
                <p className='lead'>Some fancy motto</p>
                <Link to='playerOne'>
                    <button type='button' className='btn btn-lg btn-success'>Get Started</button>
                </Link>
            </MainContainer>
        )
    }
})

export default Home