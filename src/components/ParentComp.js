import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            name: 'Shubham'
        }
    }

    componentDidMount(){
        
        setInterval(() => {
            if(this.state.name == 'Shubham'){
                this.setState({
                    name: 'Shubham Banerjee'
                })
            }
            else{
                this.setState({
                    name: 'Shubham'
                })
            }
        }, 2000)
    }
    
    render(){
        console.log('----------------parent component render-----------------')
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp