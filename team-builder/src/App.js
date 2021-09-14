import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initalFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [team, setTeam] = useState([])

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeam(res.data))
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team List</h1>
      </header>
      <section>

      </section>
    </div>
  );
}

export default App;
