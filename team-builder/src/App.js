import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';

const initalFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [team, setTeam] = useState([])
  const [formValues, setFormValues] = useState(initalFormValues);

  
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeam([...team, newMember])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team List</h1>
      </header>
      <section>
        <Form
          update={updateForm}
          submit={submitForm}
          values={formValues}
        />
        {team.map((person, idx) => {
          return(
            <div key={idx}>
              <h3>{person.name}</h3>
              <h3>{person.email}</h3>
              <h3>{person.role}</h3>
            </div>
          )
        })}
      </section>
    </div>
  );
}

export default App;
