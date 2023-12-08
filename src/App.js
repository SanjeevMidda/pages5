import { useState } from 'react';
import './index.css';

function App() {

  const [state, setState] = useState(0);

  return (
    <div className="App" onClick={() => {setState(state + 1)}}>
      <div className="container">
        {
          state === 0?
          <h1>{state}</h1> : null
        }

        {
          state === 1?
          <h1>{state}</h1> : null
        }
        {
          state === 2?
          <h1>{state}</h1> : null
        }
      </div>
    </div>
  );
}

export default App;
