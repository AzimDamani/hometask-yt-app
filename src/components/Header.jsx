import React from "react";
import "../index.css";
import Search from "./Search";
const Header = ({getData}) => {
    return(
        <div className="header">
            <div className="logo">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/023/986/480/small_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" alt="YouTube" />
            <h3>YouTube</h3>
            </div>
            
            <Search />
        </div>
    )
} 

export default Header;