/* eslint-disable react/jsx-no-undef */
import logo from './logo.svg';
import './App.css';
import {Routes,Route, Link} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login';
import List from './pages/list/List.jsx';
import Single from './pages/single/Single.jsx';
import New from './pages/new/New.jsx';
import { productInputs, userInputs } from './formSource.js';
import './style/dark.scss';
import { useContext } from 'react';
import { darkModeContext } from './context/darkModeContext.js';

function App() {

  const {darkMode} = useContext(darkModeContext)

  return (
    <div className={darkMode? "app dark":"app"}>
      <Routes>
        <Route index element = {<Home  />}/>
        <Route path='login' element = {<Login />}/>
        <Route path='users'>
            <Route index element = {<List/>} />
            <Route path = ":userID" element = {<Single/>} />
            <Route path='new' element = {<New inputs ={userInputs}
            title='Add new User'/>}/>
        </Route>
        <Route path='products'>
            <Route index element = {<List/>} />
            <Route path = ":productID" element = {<Single/>} />
            <Route path='new' element = {<New inputs={productInputs}
             title='Add new Product'/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
