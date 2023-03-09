import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'
// importing the child components here!!

class NestingComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: true,
            isLoggedIn: true,
        }
    }
    render() {
        return (
            <div> 
                <UserData isLoaded={this.state.isLoaded}/>
                <UserMessage isLoggedIn={this.state.isLoggedIn}/>
            </div>
        )
    }
}
 // UserMessage (in the div) is passing the props down from the child component (UserMessage)
 // Userdatat (in the div) is passing props down from the child component (UserData)

export default NestingComponents