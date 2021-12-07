import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import  IconButton  from "@material-ui/core/IconButton";
import iplogo from './images/iplogo.png'
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="large" className="header_icon" /> 
            </IconButton>
             {/* <h4>Islamic Marriage according to the Sunnah of our beloved Prophet Muhammad(SAW)</h4> */}
         <img className="header_logo" src={iplogo} alt="Islamic Polygyny Logo" />

         <IconButton>
          <ForumIcon fontSize="large" className="header_icon"/>
          </IconButton>
        </div>
    )
}

export default Header
