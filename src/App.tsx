import './App.css'
import axios from 'axios';
import styled from 'styled-components';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// styled-components sample
const Background = styled.div`
    background: #343343; 
    width: 100vw;
    min-height: 100vh;
    height: auto;
    color: #BBB9CE;
    padding: 20px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
  max-width: 414px;
  width: 100vw;
  max-height: 896px;
  height: 90vh;
  border: 1px solid #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0;
`;

function App() {
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
    <Background>
      <Container>
        <Login></Login>
        {/* <SignUp></SignUp> */}
      </Container>
      {/* <div>
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
      </p> */}
    </Background>
  )
}

export default App
