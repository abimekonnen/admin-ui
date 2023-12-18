/* eslint-disable react/jsx-no-undef */
import logo from './logo.svg';
import './App.css';
import {Routes,Route, Link} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login';
import List from './pages/list/List.js';
import Single from './pages/single/Single.js';
import New from './pages/new/New.js';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element = {<Home />}/>
        <Route path='login' element = {<Login />}/>
        <Route path='users'>
            <Route index element = {<List/>} />
            <Route path = ":userID" element = {<Single/>} />
            <Route path='new' element = {<New />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
