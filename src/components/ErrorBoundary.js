import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        if(this.state.hasError){
            return (
                <h1>
                    We are figuring out what went wrong ! :O 
                </h1>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary