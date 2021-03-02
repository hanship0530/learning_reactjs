import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({persons: [
      { name: 'Maximilian', age: 27},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Does this work now?'));
  }
}
export default App;
