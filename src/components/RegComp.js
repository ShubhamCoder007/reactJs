import React, { Component } from 'react'

class RegComp extends Component{

    // shouldComponentUpdate(){
    //     return true
    // }

    render(){
        console.log('Regular component render')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegComp