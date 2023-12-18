import React from 'react';
import "./Widget.scss";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
const widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">123321</span>
        <span className="link">See all users</span>
      </div>
      <div className="right">
        <div className="percentage">
            <ArrowUpwardRoundedIcon/>
            20%
        </div>
        <AccountCircleRoundedIcon className='icon'/>
      </div>
    </div>
  )
}

export default widget
