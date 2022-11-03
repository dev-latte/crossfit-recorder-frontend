import './App.css'
import axios from 'axios';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';

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
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  )
}

export default App
