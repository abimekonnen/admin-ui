import React from 'react';
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DvrRoundedIcon from '@mui/icons-material/DvrRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import MonitorHeartSharpIcon from '@mui/icons-material/MonitorHeartSharp';
import ManageSearchSharpIcon from '@mui/icons-material/ManageSearchSharp';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

const Sidebar = () => {
  return (
    <div className = 'sidebar'>
      <div className="top">
        <span className ="logo"> Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="tittle">MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className="tittle">LISTS</p>
          <li>
            <PeopleAltIcon className='icon'/>
            <span>Users</span>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className='icon'/>
            <span>Products</span>
          </li> 
          <li>
            <DvrRoundedIcon className='icon'/>
            <span>Orders</span>
          </li> 
          <li>
            <LocalShippingRoundedIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className="tittle">USEFUL LINKS</p>
          <li>
            <LeaderboardRoundedIcon className='icon'/>
            <span>Status</span>
          </li>
          <p className="tittle">SERVICE</p>
          <li>
            <MonitorHeartSharpIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <ManageSearchSharpIcon className='icon'/>
            <span>Logs</span>
          </li>
          <p className="tittle">USER</p>
          <li>
            <AccountCircleRoundedIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppRoundedIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar