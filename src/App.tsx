import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import styled from 'styled-components';

// styled-components sample
const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`;

function App() {
  const [count, setCount] = useState(0);
  const requestTest = () => {
    axios.get("http://localhost:3000/api/user")
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <Logo src="/vite.svg" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <Logo src={reactLogo} className="react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={requestTest}>
          request!
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
