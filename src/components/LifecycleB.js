import React, {Component} from 'react'

class LifecycleB extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Dip'
        }
        console.log('LifecycleB constructor');
    }
    
    static getDerivedStateFromProps(){
        console.log('LifecycleB getderivedstatefromprops');
    }

    componentDidMount(){
        console.log('LifecycleB componentdidmount');
    }

    render(){
        console.log('LifecycleB render');
        return (
            <div>
                B here rendered
            </div>
        )
    }
}

export default LifecycleB