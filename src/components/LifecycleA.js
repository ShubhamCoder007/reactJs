import React, {Component} from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Dip'
        }
        console.log('Lifecycle A constructor');
    }
    
    static getDerivedStateFromProps(){
        console.log('Lifecycle A getderivedstatefromprops');
    }

    componentDidMount(){
        console.log('Lifecycle A componentdidmount');
    }

    render(){
        console.log('Lifecycle A render');
        return (
            <div>
                A rendered
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA