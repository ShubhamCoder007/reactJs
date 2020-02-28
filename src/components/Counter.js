import React, {Component} from 'react'

class Counter extends Component
{

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    countUp(){
        // this.setState({
        //     count: this.state.count + 1
        // },
        // () => {
        //     console.log('callback value', this.state.count)
        // })

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    countUp5(){
        this.countUp();
        this.countUp();
        this.countUp();
        this.countUp();
        this.countUp();
    }

    countDown(){
        // this.setState(
        //     {
        //         count: this.state.count - 1
        //     }
        // )

        this.setState(
            prevState => (
                {
                    count: prevState.count - 1
                }
            )
        )
    }

    countDown5(){
        this.countDown()
        this.countDown()
        this.countDown()
        this.countDown()
        this.countDown()
    }

    render(){
       return(
            <div>
                <div>count: {this.state.count}</div>
                <button onClick={() => this.countUp()}>Count up</button>

                <button onClick={() => this.countUp5()}>Count up 5</button>

                <button
                 onClick={() => this.countDown()} 
                 className="btn btn-secondary btn-sm">Count Down</button>
                 
                 <button
                 onClick={() => this.countDown5()} 
                 className="btn btn-secondary btn-sm">Count Down 5</button>
            </div>
       )
    }
}

export default Counter