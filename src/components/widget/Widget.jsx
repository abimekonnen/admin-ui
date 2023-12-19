import React from 'react';
import "./Widget.scss";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import DvrRoundedIcon from '@mui/icons-material/DvrRounded';

const widget = ({type}) => {
    let data;
    //temporary
    const amount = 100;
    const difference = 20;
        switch(type){
            case "user":
                data={
                    title: "USERS",
                    isMoney: false,
                    link: "See all users",
                    icon: <AccountCircleRoundedIcon className='icon'
                    style={
                        {
                            color: "crimson",
                            backgroundColor: 'rgba(255, 0, 0, 0.2)',
                        }
                    }
                    />,

                };
                break ;
            case "order":
                data={
                    title: "ORDERS",
                    isMoney: false,
                    link: "View all orders",
                    icon: <DvrRoundedIcon className='icon'
                    style={
                        {
                            color: "goldenroad",
                            backgroundColor: 'rgba(0, 0, 255, 0.2)',
                        }
                    }
                    />,
    
                };
                break;
            case "earning":
                data={
                    title: "EARNINGS",
                    isMoney: true,
                    link: "View net earnings",
                    icon: <MonetizationOnRoundedIcon className='icon'
                    style={
                        {
                            color: "green",
                            backgroundColor: 'rgba(0, 128, 0, 0.2)',
                        }
                    }
                    />,
                };
                break;
            case "balance":
                data={
                    title: "BALANCE",
                    isMoney: true,
                    link: "Seee details",
                    icon: <AccountBalanceRoundedIcon className='icon'
                    style={
                        {
                            color: "purple",
                            backgroundColor: 'rgba(128, 0, 128, 0.2)',
                        }
                    }
                    />,
    
                    };
            break;             
            default:
                break;
        }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive " >
            <ArrowUpwardRoundedIcon/>
            {difference}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default widget
