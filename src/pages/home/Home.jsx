import React from 'react'
import './Home.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navabar from "../../components/navbar/Navbar"
const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navabar />
      </div>
    </div>
    
  )
}

export default Home