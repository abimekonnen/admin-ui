import React from 'react';
import './Single.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";   

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className="top">
            <div className="left"> 
              <div className="editButton">
               Edit
              </div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg" 
                alt="image" className="itemImg"/>
                <div className="details">
                  <h2 className="itemTitle">mayee</h2>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">mayee@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+2519 200 01978</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">Adiss Ababa Garmetn condominium</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">Ethiopia</span>
                  </div>
                </div>
              </div>  
            </div>
            <div className="right">
              <Chart title = "User Spending Last 6 Months " aspect={3 /1} />
            </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table />
        </div>
      </div>

    </div>
  )
} 

export default Single
