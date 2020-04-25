import React, { useState } from 'react';

import Routes from './routes';

import './global.css';

export default function App () {
  return (
    <div>
      <Routes />
    </div>
  );
}

/*function App() {
  const [ counter, setCounter ] = useState(0);
  function increment () {
    setCounter(counter + 1);
  }
  return (
    <div>
      <Header title="Be The Hero">Contador: { counter }</Header>
      <button onClick={ increment }>Increment</button>
      <Logon />
    </div>
  );
}

export default App;
*/