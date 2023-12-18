import React from 'react';
import './Home.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navabar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navabar />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
    </div>
    
  )
}

export default Home