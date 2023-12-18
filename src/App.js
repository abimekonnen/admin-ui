import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path ="login" element = {<Login />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
