import React, { Component } from 'react'

class RefsDemo extends Component{
    
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        this.tref = React.createRef()

        this.state = {
            ta: ''
        }
    }

    componentDidMount(){
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }

    clickHandler = () => {
        alert(`hi ${this.inputRef.current.value} ta: ${this.tref.current.value}`)
    }

    changeTa = (event) => {
        this.setState ({
            ta: event.target.value
        })
    }

    render(){
        return (
            <div>
                <input type="text" ref={this.inputRef}/><br/><br/>
                <textarea type="text" value={this.state.ta} onChange={this.changeTa} ref={this.tref}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo