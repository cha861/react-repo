import React from 'react';
import './App.css';

// Our array of data. In a real app, this might come from state or an API.
const skills = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'JavaScript' },
  { id: 4, name: 'React' }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Skills List</h1>
        <ul>
          {/* We use the .map() method to loop over the skills array. */}
          {/* For each skill object, we return an <li> element. */}
          {skills.map(skill => (
            // The 'key' prop is crucial for React to keep track of each list item.
            <li key={skill.id}>
              {skill.name}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
