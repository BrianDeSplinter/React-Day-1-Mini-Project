import React, {Component} from 'react';

class Header extends Component {
    constructor(){
        super()
        this.state = {
            name: 'Brian'
        }
    }


    render(){
        console.log(this.state)
        return (
            <header>
                <span>This is {this.state.name}'s header</span>
            </header>
        )
    }
}

export default Header;