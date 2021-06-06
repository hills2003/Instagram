import React from 'react';
import "./Main.css"
import HomeIcon from '@material-ui/icons/Home';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Content from "./Content";

function Main(props) {
    return (
        <>
          <div className="header">
              <div className="container">
              <div className="instagram">Instagram</div>
              <div className="search-bar"><input type="text" name="text" placeholder="Search"  /></div>
              <div className="left-header">
                     <div className="align">
                         <HomeIcon />
                         <SendOutlinedIcon />
                         <ExploreOutlinedIcon />
                         <FavoriteBorderOutlinedIcon />
                         <AccountCircleOutlinedIcon />
                     </div>
              </div>
              </div>
          </div>

          <Content />  
        </>
    );
}

export default Main;