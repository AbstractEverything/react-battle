import React from 'react'

let styles = {
    container: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        fontSize: '55px'
    },
    content: {
        textAlign: 'center',
        position: 'absolute',
        width: '100%',
        marginTop: '30px',
    }
}

let Loading = React.createClass({
    propTypes: {
        text: React.PropTypes.string,
        speed: React.PropTypes.number,
    },
    getDefaultProps() {
        return {
            text: 'Loading',
            speed: 300
        }
    },
    getInitialState() {
        this.originalText = this.props.text
        return {
            text: this.originalText
        }
    },
    componentDidMount() {
        let stopper = this.originalText + '...'
        this.interval = setInterval(() => {
            if (this.state.text === stopper) {
                this.setState({
                    text: this.originalText
                })
            } else {
              this.setState({
                text: this.state.text + '.'
              })
            }
        }, this.props.speed)
    },
    componentWillUnmount() {
        window.clearInterval(this.interval)
    },
    render() {
        return (
            <div style={styles.container}>
                <p style={styles.content}>{this.state.text}</p>
            </div>
        )
    }
})

module.exports = Loading