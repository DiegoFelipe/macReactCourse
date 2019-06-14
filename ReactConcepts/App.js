import React, { Component } from 'react'

class App extends Component {

    state = {
        persons : [
            { name: 'Diego', age: 28},
            { name: 'Diego', age: 25},
        ]
    }

    handleChange = () => {
        this.setState( {
            persons: [
                {name: 'guga', age: 4}
            ]
        })

    }

    render() {
        return(
            <>
                <h1>Teste</h1>
                <button onClick={this.handleChange}>Click</button>

            </>
        )
    }
}
