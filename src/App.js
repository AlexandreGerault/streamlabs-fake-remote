import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [name, setUserName] = useState('ThomLec');

  const handleInput = (event) => {
    setUserName(event.target.value)
  }

  const handleFollow = () => {
    console.log("Handle follow")
  }

  const handleSub = () => {
    console.log("Handle sub")
  }

  const handleRaid = () => {
    console.log("Handle raid")
  }

  return (
    <div className="App">
      <div className="container">
        <h3>Fake Streamlabs Socket API server - Use the remote</h3>

        <div className="form-input">
          <label htmlFor="username">Username</label>
          <input type="text" value={name} onChange={handleInput} id="username" />
        </div>
        <div className="actions">
          <button onClick={handleFollow}>Fake un follow</button>
          <button onClick={handleSub}>Fake un sub</button>
          <button onClick={handleRaid}>Fake un raid</button>
        </div>
      </div>
    </div>
  );
}

export default App;
