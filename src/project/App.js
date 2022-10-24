import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import SignUp from './SignUp';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;