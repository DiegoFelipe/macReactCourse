import React from 'react';
import logo from './logo.svg';
import './App.css';
import AnimatedList from 'animatedlistcomponent'
import Person from './components/Person/Person'

class App extends React.Component {

  // const [nameState, setNameState] = useState()
  constructor(props) {
    super(props)

    this.state = {
      persons: [{name: 'Initial Name', age: 99}]
    }
  }

  switchNameHandler =  newName => {
    this.setState({
      persons: [
       
        {name: newName, age: 99}
      ]
    })
  }

   nameChangeHandler = event => {
    this.setState({
      persons: [
        
        {name: event.target.value, age: 99}
      ]
    })
  }


  render() {

    return (
      <div className="App">
       
  
          <button onClick={() => this.switchNameHandler('button')}>Click</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name='Diego Felipe' age={27} changed={this.nameChangeHandler}/>
          <Person name='Evely Patrícia' age={24} onClick={() => this.switchName('asdsad')}/>
          <AnimatedList buttonText="Add item"  />
  
       
      </div>
    );
  }
}

export default App;
