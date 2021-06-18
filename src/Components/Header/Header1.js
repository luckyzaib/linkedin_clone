import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import mage from '../../images/profile.jpeg';

import './Header.css';

import HeaderIcon from './Icons/HeaderIcon';
import { Avatar } from '@material-ui/core';
const Header = () => {
  return (
    <header className='header'>

      <div className="header_left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="logo" />
        <div className="header_search">
          <SearchIcon />
          <form>
            <input type="text" placeholder="Search"/>
          </form>
        </div>
      </div>


      <div className="header_right">
        <HeaderIcon title="Home" Icon={HomeRoundedIcon}  />
        <HeaderIcon title="My Networks" Icon={PeopleRoundedIcon}  />
        <HeaderIcon title="Jobs" Icon={WorkRoundedIcon}  />
        <HeaderIcon title="Messaging" Icon={ChatRoundedIcon}  />
        <HeaderIcon title="Notifications" Icon={NotificationsRoundedIcon}  />
        <HeaderIcon  Avatar={Avatar}  image={mage}/>
      </div>
    </header>

  )
}

export default Header
