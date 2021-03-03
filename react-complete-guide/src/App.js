import logo from './logo.svg';
import './App.css';
// import React, { Component } from 'react';
import React, { useState } from 'react';
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

function App() {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });
  
  const [ otherState, setOtherState ] = useState('some other value');
  const [ showPersons, setShowPersons ] = useState(false);
  
  console.log(personsState, otherState);
  
  const switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        { name: newName, age: 27 },
        { name: personsState.persons[1].name, age: 29 },
        { name: personsState.persons[2].name, age: 26 }
      ]
    })
  };

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: personsState.persons[0].name, age: 27 },
        { name: event.target.value, age: 29 },
        { name: personsState.persons[2].name, age: 26 }
      ]
    })
  };
  
  // Inline style
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1x solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  const togglePersonHandler = () => {
    const doesShow = showPersons;
    setShowPersons(!doesShow);
  };

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is really working</p>
      <button
        style={style}
        onClick={togglePersonHandler}>Switch Name</button>
      {
        showPersons ?
        <div>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
          <Person name={personsState.persons[1].name}
            age={personsState.persons[1].age}
            click={switchNameHandler.bind(this, 'Max!')}
            changed={nameChangeHandler}> My Hobbies: Racing</Person>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div> : null
      }  
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Does this work now?'));
};

export default App;
