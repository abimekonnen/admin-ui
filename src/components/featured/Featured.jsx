import React from 'react';
import "./Featured.scss";
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertRoundedIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar
             value={70} text = {"70%"}  strokeWidth={3}
             />
        </div>
        <p className="title">Total sales made today</p>
             <p className="amount">$420</p>
             <p className="description">
                some discription about the sells made 
             </p>
             <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <ArrowUpwardRoundedIcon fontSize='small'/>
                        <div className="resulAmount ">$12.4</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <ArrowUpwardRoundedIcon fontSize='small'/>
                        <div className="resulAmount">$12.4</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <ArrowDownwardRoundedIcon fontSize='small'/>
                        <div className="resulAmount ">$12.4</div>
                    </div>
                </div>
             </div>
      </div>
    </div>
  )
}

export default Featured
