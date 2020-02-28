import React, {Component} from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor!'
        }
    }

    changeMessage(){
        this.setState(
            {
                message: 'Thank you!'
            }
        )
    }

    render(){
        return (
            <div>
                <div><h1>{this.state.message}</h1></div>
                <button onClick={() =>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message