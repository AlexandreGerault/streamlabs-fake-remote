import './App.css';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const localSocket = io('http://localhost:1111')

const App = () => {
  const [name, setUserName] = useState('ThomLec');

  useEffect(() => {
    localSocket.on('connect', () => {
      console.log("Connected to local server")
    })

    localSocket.on('event', (payload) => {
      console.log(payload)
    })
  })

  const handleInput = (event) => {
    setUserName(event.target.value)
  }

  const handleFollow = () => {
    localSocket.emit('event', {
      type: "follow",
      message: [
        {
          created_at: "2017-08-22 00:14:35",
          id: "170884026",
          name: "h4r5h48002",
          _id: "74a0b93e736f1f14762111f8ae34bf42"
        }
      ],
      for: "twitch_account"
    })
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
