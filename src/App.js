import './App.css';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { followEvent, raidEvent, subscriptionEvent } from './events';

const localSocket = io('http://localhost:1111')

const App = () => {
  const [username, setUserName] = useState('ThomLec');

  useEffect(() => {
    localSocket.on('connect', () => {
      console.log("Connected to local server")
    })
  })

  const handleInput = (event) => {
    setUserName(event.target.value)
  }

  const handleOnClickFollow = () => {
    localSocket.emit('event', followEvent(username))
  }

  const handleOnClickSub = () => {
    localSocket.emit('event', subscriptionEvent(username))
  }

  const handleRaid = () => {
    localSocket.emit('event', raidEvent(username))
  }

  return (
    <div className="App">
      <div className="container">
        <h3>Fake Streamlabs Socket API server - Use the remote</h3>

        <div className="form-input">
          <label htmlFor="username">Username</label>
          <input type="text" value={username} onChange={handleInput} id="username" />
        </div>
        <div className="actions">
          <button onClick={handleOnClickFollow}>Fake un follow</button>
          <button onClick={handleOnClickSub}>Fake un sub</button>
          <button onClick={handleRaid}>Fake un raid</button>
        </div>
      </div>
    </div>
  );
}

export default App;
