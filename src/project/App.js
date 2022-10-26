import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Login from './Login/Login';
import SignUp from './SignUp';
import Home from './HOME/Home';
import MemberInfo from './pages/MemberInfo';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/MemberInfo' element={<MemberInfo />} />
      </Routes>
    </Router>
  );
}

export default App;