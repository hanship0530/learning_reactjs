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
      {id:'id1',  name: 'Max', age: 28 },
      {id:'id2',  name: 'Manu', age: 29 },
      {id:'id3',  name: 'Stephanie', age: 26 }
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

  const nameChangeHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });
    // 기존 오브젝트를 수정하는 것 보다 복사해서 수정하는 것을 자바스크립트에서는 권장함
    // without mutating orignal object
    const person = { ...personsState.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({ persons: persons });
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
  
  const deletePersonHandler = (personIndex) => {
    // const persons = personsState.persons;
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({persons: persons})
  };
  let persons = null;

  if (showPersons) {
    persons = (
      <div>
        {personsState.persons.map(
          (person, index) => {
            return <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => nameChangeHandler(event, person.id)}/>
          }
        )}
          {/* <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
          <Person name={personsState.persons[1].name}
            age={personsState.persons[1].age}
            click={switchNameHandler.bind(this, 'Max!')}
            changed={nameChangeHandler}> My Hobbies: Racing</Person>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age} /> */}
        </div> 
    );
  }
  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is really working</p>
      <button
        style={style}
        onClick={togglePersonHandler}>Toggle Persons</button>
      {persons}
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Does this work now?'));
};

export default App;
