import React from 'react'
import styles from '../styles'

// Note: if the component only uses a render and has props then it can be
// written as a functional stateless component i.e. instead of React.createClass(...)

function Prompt(props) {
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
            <h1>{props.header}</h1>
            <div className="col-sm-12">
                <form onSubmit={props.onSubmitUser}>
                    <div className="form-group">
                        <input className="form-control" placeholder="Github Username" onChange={props.onUpdateUser} value={props.username} type="text" />
                    </div>
                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <button className="btn btn-block btn-success" type="submit">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

Prompt.propTypes = {
    onSubmitUser: React.PropTypes.func.isRequired,
    onUpdateUser: React.PropTypes.func.isRequired,
    header: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
}

export default Prompt