import React from 'react';
import "./Navbar.scss";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';
import NotificationAddRoundedIcon from '@mui/icons-material/NotificationAddRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import { useContext,useState } from 'react';
import { darkModeContext } from '../../context/darkModeContext';

const Navbar = () => {

  const {dispatch} = useContext(darkModeContext)
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className = 'navbar' >
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder = "Search..." />
          <SearchRoundedIcon/>
        </div>
        <div  className={menuOpen? "items open" : "items"}>
          <div className="item">
            <LanguageRoundedIcon className='icon'/>
            English
          </div>
          <div className="item">
            <DarkModeRoundedIcon  className='iconDark' 
            onClick={()=>dispatch({type: "TOGGLE"})}/>
          </div>
          <div className="item">
            <FullscreenRoundedIcon  className='icon'/>
          </div>
          <div className="item">
            <NotificationAddRoundedIcon  className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineRoundedIcon  className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ChecklistRoundedIcon  className='icon'/>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg" alt="image" className="avatar" />
          </div>
          <div className="item">
            <div className='menu' onClick={()=>
              setMenuOpen(!menuOpen)
              }>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      
    </div>
  )
}

export default Navbar
